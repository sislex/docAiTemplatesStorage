import { isKeyType, isValidKeyName } from './guards';

describe('isKeyType', () => {
  it.each(['string', 'number', 'date', 'boolean'])('returns true for "%s"', (v) => {
    expect(isKeyType(v)).toBe(true);
  });

  it.each([null, undefined, 'text', 42, '', 'String', 'NUMBER'])(
    'returns false for invalid value %p',
    (v) => {
      expect(isKeyType(v)).toBe(false);
    },
  );
});

describe('isValidKeyName', () => {
  it.each(['fullName', '_id', 'date2', 'a', '_', 'CamelCase', 'with_underscore'])(
    'returns true for valid name "%s"',
    (s) => {
      expect(isValidKeyName(s)).toBe(true);
    },
  );

  it.each(['123bad', 'with-dash', '', 'has space', '${x}', '1', '-start'])(
    'returns false for invalid name "%s"',
    (s) => {
      expect(isValidKeyName(s)).toBe(false);
    },
  );
});
