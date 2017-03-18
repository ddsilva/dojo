const isValidList = (list) => {
  const add = (a, b) => a + b;
  return list.every(Boolean) && list.reduce(add) === 45
}

const invertBoard = (board) => {
  return board.reduce((prev, curr) => {
    curr.forEach((value, index) => {
      prev[index] = prev[index] || [];
      prev[index].push(value);
    });

    return prev;
  }, []);
};

const boardRegions = (board) => {
  return board.reduce((prev, curr, index) => {
    const lastItem = prev.slice(-1)[0],
          regionsSlice = (lastItem && lastItem.length !== 9) ?
                          prev.splice(-3) :
                          [ [], [], [] ];

    return prev.concat(regionsSlice.map((item, i) => {
      const start = i * 3;
      return item.concat(curr.slice(start, start + 3))
    }))
  }, []);
};

const doneOrNot = (board) => {
  return (
    board.every(isValidList) &&
    invertBoard(board).every(isValidList) &&
    boardRegions(board).every(isValidList)
  ) ? 'Finished!' : 'Try again!';
};
