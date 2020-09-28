const CustomError = require('../extensions/custom-error');

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value = '') {
    this.chain.push(`( ${value} )`);

    return chainMaker;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position % 1 !== 0 || this.chain[position] === undefined) {
      this.chain = [];
      throw Error;
    }

    this.chain.splice(position - 1, 1);

    return chainMaker;
  },

  reverseChain() {
    this.chain.reverse();

    return chainMaker;
  },

  finishChain() {
    const res = this.chain.join('~~');
    this.chain = [];

    return res;
  },
};

module.exports = chainMaker;
