const validBraces = require('../src/valid-braces');

describe('Valid braces function', () => {
  test('should return true for valid vraces', () => {
    expect(validBraces('()')).toBe(true);
    expect(validBraces('[]')).toBe(true);
    expect(validBraces('{}')).toBe(true);
    expect(validBraces('(){}[]')).toBe(true);
    expect(validBraces('([{}])')).toBe(true);
    expect(validBraces('({})[({})]')).toBe(true);
    expect(validBraces('(({{[[]]}}))')).toBe(true);
    expect(validBraces('{}({})[]')).toBe(true);
  });

  test('should return false for invalid braces', () => {
    expect(validBraces('(}')).toBe(false);
    expect(validBraces('[(])')).toBe(false);
    expect(validBraces('(})')).toBe(false);
    expect(validBraces(')(}{][')).toBe(false);
    expect(validBraces('())({}}{()][][')).toBe(false);
    expect(validBraces('(((({{')).toBe(false);
    expect(validBraces('}}]]))}])')).toBe(false);
  });
});