// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88
const add = (a) => {
  const fn = (b) => add(a + b)
  fn.valueOf = () => a;
  return fn;
}

export default add;
