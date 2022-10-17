const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  let deleteDigits = array.filter((item) => item !== -1);
  const sortedArray = deleteDigits.sort((a, b) => a - b);

  const newArr = [];
  let sortedArrayIndex = 0;
  array.forEach((item) => {
    if (item === -1) {
      newArr.push(item);
    } else {
      newArr.push(sortedArray[sortedArrayIndex]);
      sortedArrayIndex += 1;
    }
  });
  return newArr;
}

module.exports = {
  sortByHeight,
};
