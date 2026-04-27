export interface CopilotConfig {
  apiKey: string;
  baseUrl: string;
  defaultModel: string;
}

export type CopilotMessageRole = 'system' | 'user' | 'assistant';

export interface CopilotMessage {
  role: CopilotMessageRole;
  content: string;
}

export interface SendMessageInput {
  apiKey: string;
  baseUrl: string;
  model: string;
  messages: CopilotMessage[];
}

export interface SendMessageClient {
  sendMessage(input: SendMessageInput): Promise<string>;
}

export interface AskAssistantInput {
  message: string;
  model?: string;
  skill?: string;
  history?: CopilotMessage[];
}

export interface AskAssistantResult {
  model: string;
  answer: string;
}
