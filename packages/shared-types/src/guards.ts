import type { KeyType } from './template.types';

const KEY_TYPES: readonly KeyType[] = ['string', 'number', 'date', 'boolean'];
const KEY_NAME_RE = /^[a-zA-Z_][a-zA-Z0-9_]*$/;

/** Returns true if x is a valid KeyType literal. */
export function isKeyType(x: unknown): x is KeyType {
  return KEY_TYPES.includes(x as KeyType);
}

/** Returns true if s matches the placeholder name pattern ^[a-zA-Z_][a-zA-Z0-9_]*$. */
export function isValidKeyName(s: string): boolean {
  return KEY_NAME_RE.test(s);
}
