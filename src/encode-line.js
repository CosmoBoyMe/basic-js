const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let count = 1;
  [...str].forEach((item, index) => {
    const nextItem = str[index + 1];
    if (nextItem !== item) {
      result += `${count > 1 ? count : ""}${item}`;
      count = 1;
      return;
    }
    count += 1;
  });
  return result;
}

module.exports = {
  encodeLine,
};
