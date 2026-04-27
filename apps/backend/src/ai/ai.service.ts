import { Injectable } from '@nestjs/common';

import { ErrorCode } from '../common/constants/error-codes';
import { ServiceException } from '../common/exceptions/service.exception';

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
  protected async loadBackendModule(): Promise<AiAssistantBackendModule> {
    return (await import('@templateStorage/ai-assistant-backend')) as unknown as AiAssistantBackendModule;
  }

  async chat(input: AskAssistantInput): Promise<AiChatResult> {
    try {
      const backendModule = await this.loadBackendModule();
      const config = backendModule.loadCopilotConfig(process.env);
      const client = new backendModule.CopilotClient();

      return await backendModule.askAssistant(input, { config, client });
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
