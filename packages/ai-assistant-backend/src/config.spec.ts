import { loadCopilotConfig } from './config';

describe('loadCopilotConfig', () => {
  it('returns defaults when optional env vars are missing', () => {
    const config = loadCopilotConfig({ COPILOT_API_KEY: 'test-token' });

    expect(config).toEqual({
      apiKey: 'test-token',
      baseUrl: 'https://models.inference.ai.azure.com/chat/completions',
      defaultModel: 'gpt-4o-mini',
    });
  });

  it('throws when api key is missing', () => {
    expect(() => loadCopilotConfig({})).toThrow('COPILOT_API_KEY is required');
  });
});
