/* eslint-disable require-jsdoc */
class UnionFind {
  constructor(n) {
    this.data = new Array(n);
    for (let index = 0; index <= this.data.length - 1; index++) {
      this.data[index] = index;
    }
  }

  connected(p, q) {
    return this.data[p] === this.data[q] ? true : false;
  }

  union(p, q) {
    const pIndex = this.data[p];
    const qIndex = this.data[q];
    this.data.forEach((value, index) => {
      if (value === pIndex) {
        this.data[index] = qIndex;
      }
    });
  }
}

module.exports = {
  UnionFind
};
