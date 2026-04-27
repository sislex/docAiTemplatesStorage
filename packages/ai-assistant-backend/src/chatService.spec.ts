import { askAssistant } from './chatService';

describe('askAssistant', () => {
  it('sends skill prompt, history, and current message with selected model', async () => {
    const sendMessage = jest.fn<
      Promise<string>,
      [
        {
          apiKey: string;
          baseUrl: string;
          model: string;
          messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
        },
      ]
    >();
    sendMessage.mockResolvedValue('Готово');

    const result = await askAssistant(
      {
        message: 'Привет',
        model: 'gpt-4.1',
        skill: 'template_storage_app_support',
        history: [{ role: 'assistant', content: 'Здравствуйте! Я помогу с приложением.' }],
      },
      {
        config: {
          apiKey: 'token',
          baseUrl: 'https://example.test/chat/completions',
          defaultModel: 'gpt-4o-mini',
        },
        client: { sendMessage },
      },
    );

    expect(sendMessage).toHaveBeenCalledWith({
      apiKey: 'token',
      baseUrl: 'https://example.test/chat/completions',
      model: 'gpt-4.1',
      messages: [
        {
          role: 'system',
          content: expect.stringContaining('template_storage_app_support'),
        },
        { role: 'assistant', content: 'Здравствуйте! Я помогу с приложением.' },
        { role: 'user', content: 'Привет' },
      ],
    });
    expect(result).toEqual({ model: 'gpt-4.1', answer: 'Готово' });
  });

  it('sends only last 20 history messages preserving order', async () => {
    const sendMessage = jest.fn<
      Promise<string>,
      [
        {
          apiKey: string;
          baseUrl: string;
          model: string;
          messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
        },
      ]
    >();
    sendMessage.mockResolvedValue('Ок');

    const history = Array.from({ length: 25 }, (_, index) => ({
      role: index % 2 === 0 ? ('assistant' as const) : ('user' as const),
      content: `history-${index + 1}`,
    }));

    await askAssistant(
      {
        message: 'Последний вопрос',
        history,
      },
      {
        config: {
          apiKey: 'token',
          baseUrl: 'https://example.test/chat/completions',
          defaultModel: 'gpt-4o-mini',
        },
        client: { sendMessage },
      },
    );

    const sentMessages = sendMessage.mock.calls[0]?.[0].messages ?? [];
    expect(sentMessages).toHaveLength(22);
    expect(sentMessages[1]).toEqual({ role: 'user', content: 'history-6' });
    expect(sentMessages[20]).toEqual({ role: 'assistant', content: 'history-25' });
    expect(sentMessages[21]).toEqual({ role: 'user', content: 'Последний вопрос' });
  });
});
