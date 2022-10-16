const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },

  addLink(value = "") {
    this.chains.push(value);
    return this;
  },

  removeLink(position) {
    if (this.chains[position] === undefined || position === 0) {
      this.chains = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chains = this.chains.filter((item, index) => index !== position - 1);
    return this;
  },

  reverseChain() {
    this.chains = this.chains.reverse();
    return this;
  },

  finishChain() {
    const finishedChain = this.chains.map((item) => `( ${item} )`).join("~~");
    this.chains = [];
    return finishedChain;
  },
};

module.exports = {
  chainMaker,
};
