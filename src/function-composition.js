// https://www.codewars.com/kata/5421c6a2dda52688f6000af8
const compose = (f1, f2) => (...args) => f1( f2(...args) )

export default compose;
