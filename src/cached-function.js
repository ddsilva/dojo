const cache = (fn) => {
  const results = {};

  return (...args) => {
    const key = JSON.stringify(args);
    return results[key] = key in results ? results[key] : fn(...args);
  }
}