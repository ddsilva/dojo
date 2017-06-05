const add = (a) => {
  const fn = (b) => add(a + b)
  fn.valueOf = () => a;
  return fn;
}

export default add;
