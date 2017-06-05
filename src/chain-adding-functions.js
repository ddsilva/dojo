const add = (a) => {
  const fn = (b) => add(a + b)
  fn.valueOf = () => a;
  return fn;
}

module.exports = add;
