const isInvalidList = (list) => {
  return list.some((item) => !item ) ||
         list.slice().sort()
             .some((item, i, list) => item === list[i + 1]);
};

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
                          [[],[],[]];

    return prev.concat(regionsSlice.map((item, i) => {
      const start = i*3;
      return item.concat(curr.slice(start, start + 3))
    }))
  }, []);
};

const doneOrNot = (board) => {
  return (
    board.some(isInvalidList) ||
    invertBoard(board).some(isInvalidList) ||
    boardRegions(board).some(isInvalidList)
  ) ? 'Try again!' : 'Finished!';
};
