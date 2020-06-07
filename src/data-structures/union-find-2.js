/* eslint-disable require-jsdoc */
class UnionFind {
  constructor(n) {
    this.data = new Array(n);
    for (let index = 0; index <= this.data.length - 1; index++) {
      this.data[index] = index;
    }
  }

  root(index) {
    while (this.data[index] !== index) {
      index = this.data[index];
    }
    return index;
  }

  union(p, q) {
    const pIndex = this.root(p);
    const qIndex = this.root(q);
    this.data[pIndex] = qIndex;
  }

  connected(p, q) {
    const pIndex = this.root(p);
    const qIndex = this.root(q);
    return pIndex === qIndex ? true : false;
  }

  toString() {
    console.log(this.data);
  }
}

module.exports = {
  UnionFind
};
