import type { CopilotConfig } from './types.js';

const DEFAULT_BASE_URL = 'https://models.inference.ai.azure.com/chat/completions';
const DEFAULT_MODEL = 'gpt-4o-mini';

export function loadCopilotConfig(env: NodeJS.ProcessEnv = process.env): CopilotConfig {
  const apiKey = env.COPILOT_API_KEY?.trim();
  if (!apiKey) {
    throw new Error('COPILOT_API_KEY is required');
  }

  return {
    apiKey,
    baseUrl: env.COPILOT_BASE_URL?.trim() || DEFAULT_BASE_URL,
    defaultModel: env.COPILOT_DEFAULT_MODEL?.trim() || DEFAULT_MODEL,
  };
}
