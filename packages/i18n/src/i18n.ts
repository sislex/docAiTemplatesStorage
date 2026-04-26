import enLocale from '../locales/en.json';
import ruLocale from '../locales/ru.json';

export type SupportedLocale = 'ru' | 'en';

export const DEFAULT_LANG: SupportedLocale = 'ru';

// Flat locale map indexed by locale code
const LOCALES: Record<SupportedLocale, Record<string, unknown>> = {
  ru: ruLocale as Record<string, unknown>,
  en: enLocale as Record<string, unknown>,
};

/** Returns the list of supported locale codes. */
export function getSupportedLanguages(): SupportedLocale[] {
  return Object.keys(LOCALES) as SupportedLocale[];
}

/**
 * Resolves a dot-notation key from a nested object.
 * e.g. "confirm.delete.title" → obj["confirm"]["delete.title"]
 * Tries longest-match first to support keys with dots inside them.
 */
function resolve(obj: Record<string, unknown>, key: string): string | undefined {
  // Walk the key segments, trying each possible split point
  const segments = key.split('.');
  let current: unknown = obj;

  for (let i = 0; i < segments.length; i++) {
    if (current === null || typeof current !== 'object') return undefined;

    const map = current as Record<string, unknown>;
    // Try to match remaining key as a flat property first (e.g. "delete.title")
    const remainingKey = segments.slice(i).join('.');
    if (typeof map[remainingKey] === 'string') {
      return map[remainingKey] as string;
    }

    const segment = segments[i] as string;
    if (!(segment in map)) return undefined;
    current = map[segment];
  }

  return typeof current === 'string' ? current : undefined;
}

/**
 * Translates a dot-notation key into the requested locale,
 * falling back to DEFAULT_LANG (ru) if not found.
 * Supports {param} interpolation via the optional params argument.
 */
export function t(key: string, lang: SupportedLocale, params?: Record<string, string>): string {
  const locale = LOCALES[lang] ?? LOCALES[DEFAULT_LANG];
  let value = resolve(locale, key) ?? resolve(LOCALES[DEFAULT_LANG], key) ?? key;

  if (params) {
    for (const [param, replacement] of Object.entries(params)) {
      value = value.replaceAll(`{${param}}`, replacement);
    }
  }

  return value;
}
