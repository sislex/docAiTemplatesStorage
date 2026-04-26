import type { TemplateSummary } from '@templateStorage/shared-types';
import { v4 as uuidv4 } from 'uuid';

/** Creates a TemplateSummary object with defaults and a unique id. */
export function makeTemplateSummary(overrides: Partial<TemplateSummary> = {}): TemplateSummary {
  const now = new Date().toISOString();
  return {
    id: uuidv4(),
    name: 'Тестовый шаблон',
    description: 'Шаблон для тестирования',
    placeholderCount: 1,
    createdAt: now,
    updatedAt: now,
    ...overrides,
  };
}
