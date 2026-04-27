import { resolveModel } from './models.js';
import type {
  AskAssistantInput,
  AskAssistantResult,
  CopilotConfig,
  CopilotMessage,
  SendMessageClient,
} from './types.js';

interface AskAssistantDeps {
  config: CopilotConfig;
  client: SendMessageClient;
}

const DEFAULT_SKILL = 'template_storage_app_support';
const MAX_HISTORY_MESSAGES = 20;

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

function buildDomainPrompt(skill: string): string {
  return [
    'You are an assistant for the templateStorage application.',
    `Active skill: ${skill}.`,
    'Answer only questions related to this application: templates, placeholders, metadata, upload flow, validation, backend API, and UI behavior.',
    'If the user asks something outside this app scope, politely refuse and ask to rephrase the question within the application context.',
  ].join(' ');
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
  const skill = input.skill?.trim() || DEFAULT_SKILL;
  const history = normalizeHistory(input.history);
  const messages: CopilotMessage[] = [
    { role: 'system', content: buildDomainPrompt(skill) },
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
