import type { SendMessageInput } from './types.js';

interface ChatCompletionsResponse {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
}

export class CopilotClient {
  constructor(private readonly fetchImpl: typeof fetch = fetch) {}

  async sendMessage(input: SendMessageInput): Promise<string> {
    const response = await this.fetchImpl(input.baseUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${input.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: input.model,
        messages: input.messages,
      }),
    });

    if (!response.ok) {
      throw new Error(`Copilot request failed with status ${response.status}`);
    }

    const data = (await response.json()) as ChatCompletionsResponse;
    const answer = data.choices?.[0]?.message?.content?.trim();
    if (!answer) {
      throw new Error('Copilot response does not contain assistant message');
    }

    return answer;
  }
}
