
describe('Check invalid lists', function () {
  it('should return false for an list with duplicate values', () => {
    expect(isInvalidList([1,2,3,4,5,6,6,8,9])).toBe(true);
    expect(isInvalidList([1,2,3,4,5,6,7,3,9])).toBe(true);
  });

  it('should return false for an list with an zero item', () => {
    expect(isInvalidList([1,2,3,4,0,6,7,8,9])).toBe(true);
    expect(isInvalidList([1,2,0,4,5,6,7,8,9])).toBe(true);
  });

  it('should return false for an valid list', () => {
    expect(isInvalidList([1,2,3,4,5,6,7,8,9])).toBe(false);
    expect(isInvalidList([2,1,3,5,4,7,6,9,8])).toBe(false);
  });
});


describe('Sudoku checker', function() {
  beforeEach( () => {
    this.validSudoku = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];

    this.invalidSudoku = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 0, 3, 4, 9],
      [1, 0, 0, 3, 4, 2, 5, 6, 0],
      [8, 5, 9, 7, 6, 1, 0, 2, 0],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 0, 1, 5, 3, 7, 2, 1, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 0, 0, 4, 8, 1, 1, 7, 9]
    ];

    this.doneReturn = 'Finished!';
    this.notDoneReturn = 'Try again!';
  });

  it('should be valid', () => {
    expect(doneOrNot(this.validSudoku)).toBe(this.doneReturn);
  });

  it('should be invalid', () => {
    expect(doneOrNot(this.validSudoku)).toBe(this.notDoneReturn);
  });
});