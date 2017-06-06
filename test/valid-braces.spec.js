import validBraces from '../src/valid-braces';

describe('Valid braces function', () => {
  it('should return true for valid vraces', () => {
    expect(validBraces('()')).toBe(true);
    expect(validBraces('[]')).toBe(true);
    expect(validBraces('{}')).toBe(true);
    expect(validBraces('(){}[]')).toBe(true);
    expect(validBraces('([{}])')).toBe(true);
    expect(validBraces('({})[({})]')).toBe(true);
    expect(validBraces('(({{[[]]}}))')).toBe(true);
    expect(validBraces('{}({})[]')).toBe(true);
  });

  it('should return false for invalid braces', () => {
    expect(validBraces('(}')).toBe(false);
    expect(validBraces('[(])')).toBe(false);
    expect(validBraces('(})')).toBe(false);
    expect(validBraces(')(}{][')).toBe(false);
    expect(validBraces('())({}}{()][][')).toBe(false);
    expect(validBraces('(((({{')).toBe(false);
    expect(validBraces('}}]]))}])')).toBe(false);
  });
});
