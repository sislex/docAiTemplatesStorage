import { CopilotClient } from './copilotClient';

describe('CopilotClient', () => {
  it('calls endpoint and extracts assistant response text', async () => {
    const fetchMock = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({
        choices: [{ message: { content: 'Ответ от модели' } }],
      }),
    } as Response) as jest.MockedFunction<typeof fetch>;

    const client = new CopilotClient(fetchMock);
    const answer = await client.sendMessage({
      apiKey: 'token',
      baseUrl: 'https://example.test/chat/completions',
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Answer only about templateStorage.' },
        { role: 'user', content: 'Как заменить ключи?' },
      ],
    });

    expect(fetchMock).toHaveBeenCalledWith('https://example.test/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer token',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'Answer only about templateStorage.' },
          { role: 'user', content: 'Как заменить ключи?' },
        ],
      }),
    });
    expect(answer).toBe('Ответ от модели');
  });
});
