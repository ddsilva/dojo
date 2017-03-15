const isInvalidList = (list) => {
  return list.some((item) => !item ) ||
         list.slice().sort()
          .some((item, i, cList) => item === cList[i + 1]);
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
  let regions = board.reduce((prev, curr, index) => {
    let lastItem = prev.slice(-1);
    +start

    if (!lastItem.length || lastItem.length === 9) {
      prev = prev.concat( [ [], [], [] ] );
    }

    let regionsSlice = prev.splice(-3);

    console.log(prev);
    let newPrev = prev.map((item, i) => {
      let start = i*3;
      console.log(item.concat(curr.slice(start, start + 3)));
      return item.concat(curr.slice(start, start + 3))
    });

    if (index == 0) {
      console.log(newPrev);
      console.log(prev);
      console.log(regionsSlice);
      console.log(prev.concat(regionsSlice));
      console.log(curr);
    }

    // prev = prev.concat(regionsSlice);

    return prev.concat(regionsSlice)
  }, []);

  console.log(regions);
  return regions
}

const doneOrNot = (board) => {
  let done = !(board.some(isInvalidList) || invertBoard(board).some(isInvalidList));
  return done ? 'Finished!' : 'Try again!';
};
