const iqTest = (numbers) => {
  const list = numbers.split(' ').map(Number),
        isOdd = ((n) => n % 2),
        odds = list.filter(isOdd),
        evens = list.filter((n) => !isOdd(n)),
        value = (odds.length == 1 ? odds : evens)[0];

  return list.indexOf(value) + 1;
}

module.exports = iqTest;
