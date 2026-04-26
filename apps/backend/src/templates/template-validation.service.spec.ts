import type { TemplateKey } from '@templateStorage/shared-types';

import { TemplateValidationService } from './template-validation.service';

const svc = new TemplateValidationService();

function key(overrides: Partial<TemplateKey> = {}): TemplateKey {
  return { name: 'field', type: 'string', label: 'Field', required: true, ...overrides };
}

describe('TemplateValidationService.validate()', () => {
  // --- INVALID_KEY_NAME ---
  it('reports INVALID_KEY_NAME when key name fails regex', () => {
    const { errors } = svc.validate({
      metadata: { keys: [key({ name: '123bad' })] },
      extractedKeys: ['123bad'],
    });
    expect(errors.some((e) => e.code === 'INVALID_KEY_NAME')).toBe(true);
  });

  it('passes for valid key names', () => {
    const { errors } = svc.validate({
      metadata: { keys: [key({ name: '_valid_1' })] },
      extractedKeys: ['_valid_1'],
    });
    expect(errors.every((e) => e.code !== 'INVALID_KEY_NAME')).toBe(true);
  });

  // --- DUPLICATE_KEY_IN_METADATA ---
  it('reports DUPLICATE_KEY_IN_METADATA for duplicate names in metadata', () => {
    const { errors } = svc.validate({
      metadata: { keys: [key({ name: 'dup' }), key({ name: 'dup' })] },
      extractedKeys: ['dup'],
    });
    expect(errors.some((e) => e.code === 'DUPLICATE_KEY_IN_METADATA')).toBe(true);
  });

  it('does not report duplicate when names are unique', () => {
    const { errors } = svc.validate({
      metadata: { keys: [key({ name: 'a' }), key({ name: 'b' })] },
      extractedKeys: ['a', 'b'],
    });
    expect(errors.every((e) => e.code !== 'DUPLICATE_KEY_IN_METADATA')).toBe(true);
  });

  // --- INVALID_KEY_TYPE ---
  it('reports INVALID_KEY_TYPE for unknown type', () => {
    const { errors } = svc.validate({
      metadata: { keys: [key({ type: 'uuid' as never })] },
      extractedKeys: ['field'],
    });
    expect(errors.some((e) => e.code === 'INVALID_KEY_TYPE')).toBe(true);
  });

  it('accepts all valid KeyType values', () => {
    const keys = ['string', 'number', 'date', 'boolean'].map((t, i) =>
      key({ name: `k${i}`, type: t as never }),
    );
    const { errors } = svc.validate({
      metadata: { keys },
      extractedKeys: ['k0', 'k1', 'k2', 'k3'],
    });
    expect(errors.every((e) => e.code !== 'INVALID_KEY_TYPE')).toBe(true);
  });

  // --- NO_PLACEHOLDERS_FOUND ---
  it('reports NO_PLACEHOLDERS_FOUND when extractedKeys is empty', () => {
    const { errors } = svc.validate({
      metadata: { keys: [] },
      extractedKeys: [],
    });
    expect(errors.some((e) => e.code === 'NO_PLACEHOLDERS_FOUND')).toBe(true);
  });

  it('does not report NO_PLACEHOLDERS_FOUND when there are extracted keys', () => {
    const { errors } = svc.validate({
      metadata: { keys: [key()] },
      extractedKeys: ['field'],
    });
    expect(errors.every((e) => e.code !== 'NO_PLACEHOLDERS_FOUND')).toBe(true);
  });

  // --- MISSING_KEY_IN_TEMPLATE ---
  it('reports MISSING_KEY_IN_TEMPLATE for each key declared in metadata but absent in DOCX', () => {
    const { errors } = svc.validate({
      metadata: { keys: [key({ name: 'declared' })] },
      extractedKeys: [],
    });
    const missing = errors.filter((e) => e.code === 'MISSING_KEY_IN_TEMPLATE');
    expect(missing.length).toBe(1);
    expect(missing[0]?.field).toBe('declared');
  });

  it('reports one error per missing key', () => {
    const { errors } = svc.validate({
      metadata: {
        keys: [key({ name: 'a' }), key({ name: 'b' }), key({ name: 'c' })],
      },
      extractedKeys: ['b'],
    });
    const missing = errors.filter((e) => e.code === 'MISSING_KEY_IN_TEMPLATE');
    expect(missing.map((e) => e.field).sort()).toEqual(['a', 'c']);
  });

  // --- UNDECLARED_KEY_IN_DOCUMENT ---
  it('reports UNDECLARED_KEY_IN_DOCUMENT for each key in DOCX but not in metadata', () => {
    const { errors } = svc.validate({
      metadata: { keys: [key({ name: 'known' })] },
      extractedKeys: ['known', 'surprise'],
    });
    const undeclared = errors.filter((e) => e.code === 'UNDECLARED_KEY_IN_DOCUMENT');
    expect(undeclared.length).toBe(1);
    expect(undeclared[0]?.field).toBe('surprise');
  });

  // --- DUPLICATE_KEY_IN_DOCUMENT (warning) ---
  it('emits DUPLICATE_KEY_IN_DOCUMENT warning when occurrences > 1', () => {
    const { warnings } = svc.validate({
      metadata: { keys: [key()] },
      extractedKeys: ['field'],
      occurrences: { field: 3 },
    });
    expect(warnings.some((w) => w.code === 'DUPLICATE_KEY_IN_DOCUMENT')).toBe(true);
  });

  it('does not emit DUPLICATE_KEY_IN_DOCUMENT when occurrences === 1', () => {
    const { warnings } = svc.validate({
      metadata: { keys: [key()] },
      extractedKeys: ['field'],
      occurrences: { field: 1 },
    });
    expect(warnings.every((w) => w.code !== 'DUPLICATE_KEY_IN_DOCUMENT')).toBe(true);
  });

  // --- Clean pass ---
  it('returns no errors and no warnings for a perfectly matching template', () => {
    const { errors, warnings } = svc.validate({
      metadata: {
        keys: [key({ name: 'fullName', type: 'string' }), key({ name: 'amount', type: 'number' })],
      },
      extractedKeys: ['fullName', 'amount'],
      occurrences: { fullName: 1, amount: 1 },
    });
    expect(errors).toHaveLength(0);
    expect(warnings).toHaveLength(0);
  });
});
