const isInvalidList = (list) => {
  return list.some((item) => !item ) ||
         list.some((item, index) => list.slice(index + 1).some(curr => curr === item))
}


const doneOrNot = (board) => {
  return 'Finished!';
}