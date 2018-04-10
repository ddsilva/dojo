const _getRank = (w1, w2) => {
  const rank = w1.split('').reduce((prev, current, index) => (
    prev + (current === w2[index] ? 1 : 0)
  ), 0);

  console.log(w2, rank);

  return rank;
};

export default class {
  constructor(words) {
    this.words = words;
  }

  findMostSimilar(term) {
    const _similarityRank = this.words.map(
      _getRank.bind(null, term)
    );

    const biggerIndex = _similarityRank.reduce((prev, curr, index) => {
      return curr > prev ? index : prev;
    }, 0);

    // return this.words[biggerIndex];
  }
};
