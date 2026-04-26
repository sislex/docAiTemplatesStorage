import { makeKey } from './makeKey';
import { makeMetadata } from './makeMetadata';
import { makeTemplateSummary } from './makeTemplateSummary';

describe('makeKey', () => {
  it('returns a TemplateKey with default values', () => {
    const key = makeKey();
    expect(key.name).toBe('fullName');
    expect(key.type).toBe('string');
    expect(key.label).toBe('Полное имя');
    expect(key.required).toBe(true);
    expect(key.defaultValue).toBeUndefined();
  });

  it('applies overrides', () => {
    const key = makeKey({ name: 'amount', type: 'number', required: false });
    expect(key.name).toBe('amount');
    expect(key.type).toBe('number');
    expect(key.required).toBe(false);
  });
});

describe('makeMetadata', () => {
  it('returns a TemplateMetadata with default values', () => {
    const meta = makeMetadata();
    expect(meta.id).toBeTruthy();
    expect(meta.name).toBe('Тестовый шаблон');
    expect(meta.placeholders).toHaveLength(1);
    expect(meta.createdAt).toBeTruthy();
    expect(meta.updatedAt).toBeTruthy();
  });

  it('applies overrides', () => {
    const meta = makeMetadata({ name: 'Custom', description: 'Desc' });
    expect(meta.name).toBe('Custom');
    expect(meta.description).toBe('Desc');
  });

  it('generates unique ids on each call', () => {
    const a = makeMetadata();
    const b = makeMetadata();
    expect(a.id).not.toBe(b.id);
  });
});

describe('makeTemplateSummary', () => {
  it('returns a TemplateSummary with default values', () => {
    const summary = makeTemplateSummary();
    expect(summary.id).toBeTruthy();
    expect(summary.placeholderCount).toBe(1);
    expect(summary.createdAt).toBeTruthy();
  });

  it('applies overrides', () => {
    const summary = makeTemplateSummary({ placeholderCount: 5, name: 'Override' });
    expect(summary.placeholderCount).toBe(5);
    expect(summary.name).toBe('Override');
  });

  it('generates unique ids on each call', () => {
    const a = makeTemplateSummary();
    const b = makeTemplateSummary();
    expect(a.id).not.toBe(b.id);
  });
});
