// https://www.codewars.com/kata/525481903700c1a1ff0000e1
const cache = (fn) => {
  const results = {};

  return (...args) => {
    const key = JSON.stringify(args);
    return results[key] = key in results ? results[key] : fn(...args);
  }
}

export default cache;
