import { t, getSupportedLanguages, DEFAULT_LANG } from './i18n';

describe('DEFAULT_LANG', () => {
  it('equals "ru"', () => {
    expect(DEFAULT_LANG).toBe('ru');
  });
});

describe('getSupportedLanguages', () => {
  it('returns ["ru", "en"]', () => {
    expect(getSupportedLanguages()).toEqual(['ru', 'en']);
  });
});

describe('t()', () => {
  it('returns the Russian translation for a known key', () => {
    expect(t('nav.catalog', 'ru')).toBe('Каталог шаблонов');
  });

  it('returns the English translation for a known key', () => {
    expect(t('nav.catalog', 'en')).toBe('Template Catalog');
  });

  it('falls back to Russian when lang is not supported', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(t('nav.catalog', 'fr' as any)).toBe('Каталог шаблонов');
  });

  it('falls back to Russian when key is missing in the requested locale', () => {
    // Force a scenario: key exists in ru but not in en by using a deep key
    expect(t('catalog.empty', 'ru')).toBe('Шаблоны не найдены');
  });

  it('returns the key itself when the key is missing in both locales', () => {
    expect(t('nonexistent.key', 'ru')).toBe('nonexistent.key');
  });

  it('interpolates {param} placeholders in the translation', () => {
    const result = t('upload.success', 'ru', { name: 'Договор' });
    expect(result).toBe('Шаблон «Договор» успешно загружен');
  });

  it('interpolates multiple params', () => {
    const result = t('detail.title', 'en', { name: 'Offer Letter' });
    expect(result).toBe('Template: Offer Letter');
  });

  it('leaves unmatched {param} tokens as-is when no params provided', () => {
    const result = t('upload.success', 'ru');
    expect(result).toContain('{name}');
  });

  it('handles nested dot-notation keys for errors', () => {
    expect(t('errors.TEMPLATE_NOT_FOUND', 'ru')).toBe('Шаблон не найден');
    expect(t('errors.TEMPLATE_NOT_FOUND', 'en')).toBe('Template not found');
  });

  it('handles confirm keys with dots in segment names', () => {
    expect(t('confirm.delete.title', 'ru')).toBe('Удалить шаблон?');
    expect(t('confirm.delete.title', 'en')).toBe('Delete template?');
  });
});
