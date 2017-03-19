describe('Function composition', () => {
  const add1    = ((a) => a + 1),
        min1    = ((a) => a - 1),
        div2    = ((a) => a / 2),
        add15   = ((a) => a + 15),
        id      = ((a) => a),
        addall5 = ((a, b, c, d, e) => a + b + c + d + e);

  it('should compose functions', () => {
    expect(compose(add1, id)(3)).toBe(4);
    expect(compose(add15, id)(0)).toBe(15);
    expect(compose(id, add15)(0)).toBe(15);
    expect(compose(id, min1)(0)).toBe(-1);
  });

  it('order should be as specified', () => {
    expect(compose(add1, div2)(2)).toBe(2);
  });

  it('Functions may be called with many arguments.', () => {
    expect(compose(add1, addall5)(1,2,3,4,5)).toBe(16);
  });
});