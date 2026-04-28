import { Injectable } from '@nestjs/common';
import type { TemplateMetadata } from '@templateStorage/shared-types';

import { ErrorCode } from '../common/constants/error-codes';
import { ServiceException } from '../common/exceptions/service.exception';
import type { TemplatesService } from '../templates/templates.service';

interface CopilotConfig {
  apiKey: string;
  baseUrl: string;
  defaultModel: string;
}

type CopilotMessageRole = 'system' | 'user' | 'assistant';

interface CopilotMessage {
  role: CopilotMessageRole;
  content: string;
}

interface SendMessageInput {
  apiKey: string;
  baseUrl: string;
  model: string;
  messages: CopilotMessage[];
}

interface SendMessageClient {
  sendMessage(input: SendMessageInput): Promise<string>;
}

interface AskAssistantInput {
  message: string;
  model?: string;
  skill?: string;
  history?: CopilotMessage[];
  templates?: TemplateContextItem[];
}

interface TemplateContextItem {
  id: string;
  name: string;
  placeholderCount: number;
  updatedAt: string;
}

export interface AiChatResult {
  model: string;
  answer: string;
}

interface AiAssistantBackendModule {
  askAssistant(
    input: AskAssistantInput,
    deps: { config: CopilotConfig; client: SendMessageClient },
  ): Promise<AiChatResult>;
  loadCopilotConfig(env?: NodeJS.ProcessEnv): CopilotConfig;
  CopilotClient: new () => SendMessageClient;
}

@Injectable()
export class AiService {
  constructor(private readonly templatesService: TemplatesService) {}

  protected async loadBackendModule(): Promise<AiAssistantBackendModule> {
    return (await import('@templateStorage/ai-assistant-backend')) as unknown as AiAssistantBackendModule;
  }

  private async getTemplatesContext(): Promise<TemplateContextItem[]> {
    try {
      const templates = await this.templatesService.list({});
      return templates.slice(0, 20).map((item: TemplateMetadata) => ({
        id: item.id,
        name: item.name,
        placeholderCount: item.placeholders.length,
        updatedAt: item.updatedAt,
      }));
    } catch {
      return [];
    }
  }

  async chat(input: AskAssistantInput): Promise<AiChatResult> {
    try {
      const backendModule = await this.loadBackendModule();
      const config = backendModule.loadCopilotConfig(process.env);
      const client = new backendModule.CopilotClient();
      const templates = await this.getTemplatesContext();

      return await backendModule.askAssistant({ ...input, templates }, { config, client });
    } catch (error) {
      const explain = error instanceof Error ? error.message : 'Unknown assistant error';
      throw new ServiceException(ErrorCode.GENERATE_FAILED, {
        retryable: false,
        action: 'ask_user',
        explain,
      });
    }
  }
}
