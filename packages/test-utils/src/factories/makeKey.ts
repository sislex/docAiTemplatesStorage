import type { TemplateKey } from '@templateStorage/shared-types';

/** Creates a TemplateKey with sensible defaults, merging any overrides. */
export function makeKey(overrides: Partial<TemplateKey> = {}): TemplateKey {
  return {
    name: 'fullName',
    type: 'string',
    label: 'Полное имя',
    required: true,
    ...overrides,
  };
}
