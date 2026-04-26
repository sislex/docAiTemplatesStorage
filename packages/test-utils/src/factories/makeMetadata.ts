import type { TemplateMetadata } from '@templateStorage/shared-types';
import { v4 as uuidv4 } from 'uuid';

import { makeKey } from './makeKey';

/** Creates a TemplateMetadata object with defaults and a unique id. */
export function makeMetadata(overrides: Partial<TemplateMetadata> = {}): TemplateMetadata {
  const now = new Date().toISOString();
  return {
    id: uuidv4(),
    name: 'Тестовый шаблон',
    description: 'Шаблон для тестирования',
    placeholders: [makeKey()],
    createdAt: now,
    updatedAt: now,
    ...overrides,
  };
}
