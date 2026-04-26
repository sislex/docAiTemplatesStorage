import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/** Loads a DOCX fixture file by name from fixtures/docx/. */
export function loadFixture(name: string): Buffer {
  // __dirname is packages/test-utils/src → go up once to reach packages/test-utils
  return readFileSync(join(__dirname, '..', 'fixtures', 'docx', name));
}
