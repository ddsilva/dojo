const iqTest = require('../src/iq-test');

describe('IQ Test', () => {
  test('should find the odd one position', () => {
    expect(iqTest("2 4 7 8 10")).toBe(3);
    expect(iqTest("2 4 6 7 8 10")).toBe(4);
  });

  test('should find the even one position', () => {
    expect(iqTest("1 2 1 1")).toBe(2);
    expect(iqTest("1 1 2 1 1")).toBe(3);
  });
});
