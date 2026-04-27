import { resolveModel } from './models';

describe('resolveModel', () => {
  it('uses explicit supported model', () => {
    expect(resolveModel('gpt-4.1', 'gpt-4o-mini')).toBe('gpt-4.1');
  });

  it('falls back to default model when requested model is empty', () => {
    expect(resolveModel('', 'gpt-4o-mini')).toBe('gpt-4o-mini');
  });

  it('throws for unsupported model', () => {
    expect(() => resolveModel('bad-model', 'gpt-4o-mini')).toThrow('Unsupported model');
  });
});
