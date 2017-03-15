describe('Check invalid lists', () => {
  it('should return false for an list with duplicate values', () => {
    expect(isInvalidList([1,2,3,4,5,6,6,8,9])).toBe(true);
    expect(isInvalidList([1,2,3,4,5,6,7,3,9])).toBe(true);
  });

  it('should return false for an list with an zero item', () => {
    expect(isInvalidList([1,2,3,4,0,6,7,8,9])).toBe(true);
    expect(isInvalidList([1,2,0,4,5,6,7,8,9])).toBe(true);
    expect(isInvalidList([5,3,4,6,7,8,9,0,2])).toBe(true);
  });

  it('should return false for an valid list', () => {
    expect(isInvalidList([1,2,3,4,5,6,7,8,9])).toBe(false);
    expect(isInvalidList([2,1,3,5,4,7,6,9,8])).toBe(false);
  });
});

describe('Invert board', () => {
  it('should return an inverted board', () => {
    expect(invertBoard(sudokuHelper.littleBoard))
      .toEqual(sudokuHelper.littleInvertedBoard);
  });
});

describe('Get region lists', () => {
  it('should return a list of regions lists', () => {
    expect(boardRegions(sudokuHelper.valid))
      .toEqual(sudokuHelper.validRegions);
  });
});

describe('Sudoku checker', () => {
  it('should be valid', () => {
    expect(doneOrNot(sudokuHelper.valid))
      .toBe(sudokuHelper.doneReturn);
  });

  it('should be invalid when there are zeros', () => {
    expect(doneOrNot(sudokuHelper.withZero))
      .toBe(sudokuHelper.notDoneReturn);
  });

  it('should be invalid when there are invalid columns', () => {
    expect(doneOrNot(sudokuHelper.withInvalidColumns))
      .toBe(sudokuHelper.notDoneReturn);
  });

  it('should be invalid when there are invalid regions', () => {
    // expect(doneOrNot(sudokuHelper.withInvalidRegions))
      // .toBe(sudokuHelper.notDoneReturn);
  });
});
