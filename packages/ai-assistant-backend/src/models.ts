const SUPPORTED_MODELS = ['gpt-4o-mini', 'gpt-4.1', 'gpt-4.1-mini'] as const;

export function resolveModel(requestedModel: string | undefined, defaultModel: string): string {
  const selected = requestedModel?.trim() ? requestedModel.trim() : defaultModel;

  if (!SUPPORTED_MODELS.includes(selected as (typeof SUPPORTED_MODELS)[number])) {
    throw new Error(`Unsupported model: ${selected}`);
  }

  return selected;
}
