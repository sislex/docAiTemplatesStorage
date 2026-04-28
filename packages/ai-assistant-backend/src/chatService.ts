import { resolveModel } from './models.js';
import { resolveSkillDefinition } from './skills/index.js';
import type {
  AskAssistantInput,
  AskAssistantResult,
  CopilotConfig,
  CopilotMessage,
  SendMessageClient,
  TemplateContextItem,
} from './types.js';

interface AskAssistantDeps {
  config: CopilotConfig;
  client: SendMessageClient;
}

const MAX_HISTORY_MESSAGES = 20;
const MAX_TEMPLATES_CONTEXT = 20;

function normalizeHistory(history: CopilotMessage[] | undefined): CopilotMessage[] {
  if (!history || history.length === 0) {
    return [];
  }

  return history
    .filter(
      (item) =>
        (item.role === 'user' || item.role === 'assistant') && item.content.trim().length > 0,
    )
    .map((item) => ({ role: item.role, content: item.content.trim() }))
    .slice(-MAX_HISTORY_MESSAGES);
}

function buildTemplatesContext(templates: TemplateContextItem[] | undefined): string {
  if (!templates || templates.length === 0) {
    return 'Current templates: none.';
  }

  const lines = templates.slice(0, MAX_TEMPLATES_CONTEXT).map((template, index) => {
    return `${index + 1}. ${template.name} (id=${template.id}, placeholders=${template.placeholderCount}, updatedAt=${template.updatedAt})`;
  });

  return `Current templates (${lines.length}): ${lines.join(' | ')}`;
}

export async function askAssistant(
  input: AskAssistantInput,
  deps: AskAssistantDeps,
): Promise<AskAssistantResult> {
  const message = input.message.trim();
  if (!message) {
    throw new Error('Message is required');
  }

  const model = resolveModel(input.model, deps.config.defaultModel);
  const skill = resolveSkillDefinition(input.skill);
  const history = normalizeHistory(input.history);
  const messages: CopilotMessage[] = [
    {
      role: 'system',
      content: `${skill.prompt} Active skill: ${skill.id}. ${buildTemplatesContext(input.templates)}`,
    },
    ...history,
    { role: 'user', content: message },
  ];

  const answer = await deps.client.sendMessage({
    apiKey: deps.config.apiKey,
    baseUrl: deps.config.baseUrl,
    model,
    messages,
  });

  return { model, answer };
}
