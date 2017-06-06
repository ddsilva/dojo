import cache from '../src/cached-function'

describe('Cached function', () => {
  let mockedFn, sortMockedFn, voidMockedFn, cached, sortCached, voidCached;
  const createMockFn = (fn) => jest.fn(fn);

  beforeEach(() => {
    mockedFn = createMockFn((...args) => args);

    sortMockedFn = createMockFn((...args) => {
      return args.sort((a,b) => a - b)
    });

    voidMockedFn = createMockFn();

    cached = cache(mockedFn);
    sortCached = cache(sortMockedFn);
    voidCached = cache(voidMockedFn);
  });

  it('should return correct results', () => {
    expect(cached(1)).toEqual([1]);
    expect(cached(1, 2)).toEqual([1, 2]);
  });

  it('should not call inner function again for known arguments', () => {
    expect(mockedFn).not.toHaveBeenCalled();

    cached(1,2,3);
    cached(1,2,3);

    expect(mockedFn).toHaveBeenCalledTimes(1);
  });

  it('should return correct result for void function call', () => {
    let r1 = voidCached(),
        r2 = voidCached();

    expect(voidMockedFn).toHaveBeenCalledTimes(1);
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
    expect(mockedFn).toHaveBeenCalledTimes(2);
  });
});
