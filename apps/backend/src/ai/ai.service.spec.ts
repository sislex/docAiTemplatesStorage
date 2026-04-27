import { ErrorCode } from '../common/constants/error-codes';

import { AiService } from './ai.service';

describe('AiService', () => {
  it('delegates message to ai-assistant-backend module', async () => {
    const service = new AiService();
    const config = {
      apiKey: 'token',
      baseUrl: 'https://models.inference.ai.azure.com/chat/completions',
      defaultModel: 'gpt-4o-mini',
    };
    const client = { sendMessage: jest.fn() };

    const backendModule = {
      loadCopilotConfig: jest.fn(() => config),
      CopilotClient: jest.fn(() => client),
      askAssistant: jest.fn(async () => ({ model: 'gpt-4o-mini', answer: 'pong' })),
    };

    jest.spyOn(service as never, 'loadBackendModule').mockResolvedValue(backendModule as never);

    const result = await service.chat({
      message: 'ping',
      model: 'gpt-4o-mini',
      skill: 'template_storage_app_support',
      history: [{ role: 'assistant', content: 'Здравствуйте!' }],
    });

    expect(backendModule.loadCopilotConfig).toHaveBeenCalledWith(process.env);
    expect(backendModule.CopilotClient).toHaveBeenCalledTimes(1);
    expect(backendModule.askAssistant).toHaveBeenCalledWith(
      {
        message: 'ping',
        model: 'gpt-4o-mini',
        skill: 'template_storage_app_support',
        history: [{ role: 'assistant', content: 'Здравствуйте!' }],
      },
      { config, client },
    );
    expect(result).toEqual({ model: 'gpt-4o-mini', answer: 'pong' });
  });

  it('throws ServiceException for backend failures', async () => {
    const service = new AiService();
    const backendModule = {
      loadCopilotConfig: jest.fn(() => ({
        apiKey: 'token',
        baseUrl: 'https://models.inference.ai.azure.com/chat/completions',
        defaultModel: 'gpt-4o-mini',
      })),
      CopilotClient: jest.fn(() => ({ sendMessage: jest.fn() })),
      askAssistant: jest.fn(async () => {
        throw new Error('Copilot request failed with status 401');
      }),
    };

    jest.spyOn(service as never, 'loadBackendModule').mockResolvedValue(backendModule as never);

    await expect(service.chat({ message: 'ping' })).rejects.toMatchObject({
      code: ErrorCode.GENERATE_FAILED,
      retryable: false,
      action: 'ask_user',
    });
  });
});
