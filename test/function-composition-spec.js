describe('Function composition', () => {
  it('should compose functions', () => {
    expect(compose(compositionHelper.add1, compositionHelper.id)(3)).toBe(4);
    expect(compose(compositionHelper.add15, compositionHelper.id)(0)).toBe(15);
    expect(compose(compositionHelper.id, compositionHelper.add15)(0)).toBe(15);
    expect(compose(compositionHelper.id, compositionHelper.min1)(0)).toBe(-1);
  });

  it('order should be as specified', () => {
    expect(compose(compositionHelper.add1, compositionHelper.div2)(2)).toBe(2);
  });

  it('Functions may be called with many arguments.', () => {
    expect(
      compose(compositionHelper.add1, compositionHelper.addall5)(1,2,3,4,5)
    ).toBe(16);
  });
});