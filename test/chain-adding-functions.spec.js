import add from '../src/chain-adding-functions';

describe('Chain adding function', () => {
  describe('When called alone', () => {
    it('should return a number', () => {
      expect(add(2).valueOf()).toBe(2);
      expect(add(5).valueOf()).toBe(5);
      expect(add(1).valueOf()).toBe(1);
    });
  });

  describe('When called within a chain', () => {
    it('should return the sum', () => {
      expect(add(1)(2).valueOf()).toBe(3);
      expect(add(1)(2)(3).valueOf()).toBe(6);
    });
  });
});
