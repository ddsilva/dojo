import Dictionary from '../src/did-you-mean';

describe('"Did you mean?" dictionary', () => {
  const fruits = new Dictionary([
    'cherry',
    'pineapple',
    'melon',
    'strawberry',
    'raspberry'
  ]);

  it('should returns the correct value', () => {
    // expect(
    //   fruits.findMostSimilar('strawbery')
    // ).toBe('strawberry');

    expect(
      fruits.findMostSimilar('berry')
    ).toBe('cherry');
  });
});
