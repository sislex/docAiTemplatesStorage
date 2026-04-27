import { requestJson } from './http';

export interface AssistantChatResponse {
  model: string;
  answer: string;
}

export interface AssistantHistoryItem {
  role: 'user' | 'assistant';
  content: string;
}

export interface AskAssistantPayload {
  message: string;
  model?: string;
  skill?: string;
  history?: AssistantHistoryItem[];
}

export async function askAssistant(payload: AskAssistantPayload): Promise<AssistantChatResponse> {
  return requestJson<AssistantChatResponse>('/ai/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}
