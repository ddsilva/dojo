describe('Cached function', () => {
  let spy, sortSpy, voidSpy, cached, sortCached, voidCached;

  beforeEach(() => {
    spy = jasmine.createSpy('spy').and.callFake((...args) => args);

    sortSpy = jasmine.createSpy('spy').and.callFake((...args) => {
      return args.sort((a,b) => a - b)
    });

    voidSpy = jasmine.createSpy('spy');

    cached = cache(spy);
    sortCached = cache(sortSpy);
    voidCached = cache(voidSpy);
  });

  it('should return correct results', () => {
    expect(cached(1)).toEqual([1]);
    expect(cached(1, 2)).toEqual([1, 2]);
  });

  it('should not call inner function again for known arguments', () => {
    expect(spy).not.toHaveBeenCalled();

    cached(1,2,3);
    cached(1,2,3);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should return correct result for void function call', () => {
    let r1 = voidCached(),
        r2 = voidCached();

    expect(voidSpy).toHaveBeenCalledTimes(1);
    expect(r1).toEqual(r2);
  });

  it('should return different results for different inner functions', () => {
    expect(cached(3, 2, 1)).toEqual([3, 2, 1]);
    expect(sortCached(3, 2, 1)).toEqual([1, 2, 3]);
  });

  it('should return correct result even for objects as arguments', () => {
    let ob1 = { foo: 1, bar: 2 },
        ob2 = { foo: 2, bar: 3 },
        r1 = cached(ob1),
        r2 = cached(ob1),
        r3 = cached(ob2);

    expect(r1).toEqual(r2);
    expect(r1).not.toEqual(r3);
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
