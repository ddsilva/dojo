import sudokuHelper from './helpers/sudoku-checker';
import {
  isValidList,
  invertBoard,
  boardRegions,
  doneOrNot
} from '../src/sudoku-checker';

describe('Check invalid lists', () => {
  test('should return false for a list with duplicate values', () => {
    expect(isValidList([1,2,3,4,5,6,6,8,9])).toBeFalsy();
    expect(isValidList([1,2,3,4,5,6,7,3,9])).toBeFalsy();
    expect(isValidList([9,9,9,9,5,1,1,1,1])).toBeFalsy();
  });

  test('should return false for a list with an zero item', () => {
    expect(isValidList([1,2,3,4,0,6,7,8,9])).toBeFalsy();
    expect(isValidList([1,2,0,4,5,6,7,8,9])).toBeFalsy();
    expect(isValidList([5,3,4,6,7,8,9,0,2])).toBeFalsy();
  });

  test('should return true for a valid list', () => {
    expect(isValidList([1,2,3,4,5,6,7,8,9])).toBeTruthy();
    expect(isValidList([2,1,3,5,4,7,6,9,8])).toBeTruthy();
  });
});

describe('Invert board', () => {
  test('should return an inverted board', () => {
    expect(invertBoard(sudokuHelper.littleBoard))
      .toEqual(sudokuHelper.littleInvertedBoard);
  });
});

describe('Get region lists', () => {
  test('should return a list of regions lists', () => {
    expect(boardRegions(sudokuHelper.valid))
      .toEqual(sudokuHelper.validRegions);
  });
});

describe('Sudoku checker', () => {
  test('should be valid', () => {
    expect(doneOrNot(sudokuHelper.valid))
      .toBe(sudokuHelper.doneReturn);
  });

  test('should be invalid when there are zeros', () => {
    expect(doneOrNot(sudokuHelper.withZero))
      .toBe(sudokuHelper.notDoneReturn);
  });

  test('should be invalid when there are invalid columns', () => {
    expect(doneOrNot(sudokuHelper.withInvalidColumns))
      .toBe(sudokuHelper.notDoneReturn);
  });

  test('should be invalid when there are invalid regions', () => {
    expect(doneOrNot(sudokuHelper.withInvalidRegions))
      .toBe(sudokuHelper.notDoneReturn);
  });
});
