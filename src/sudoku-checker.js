const isInvalidList = (list) => {
  return list.some((item) => !item ) ||
         list.slice().sort()
          .some((item, i, cList) => item === cList[i + 1]);
}

const invertBoard = (board) => {
  return board.reduce((prev, curr) => {
    curr.forEach((value, index) => {
      prev[index] = prev[index] || [];
      prev[index].push(value);
    });
    return prev;
  }, []);
}

function doneOrNot(board){
  let done = true;

  // Check Lines
  done = !board.some(isInvalidList);

  // Check columns
  if (done) {
    done = done && !invertBoard(board).some(isInvalidList);
  }

  return done ? 'Finished!' : 'Try again!';
}