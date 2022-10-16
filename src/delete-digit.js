const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numberInString = String(n);
  let result = 0;

  for (let i = 0; i < numberInString.length; i += 1) {
    const arrayWithoutDigit = [...numberInString].filter(
      (item, index) => index !== i
    );
    const numberWithoutDigit = Number(arrayWithoutDigit.join(""));
    if (result <= numberWithoutDigit) {
      result = numberWithoutDigit;
    }
  }
  return result;
}

module.exports = {
  deleteDigit,
};
