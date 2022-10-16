const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const result = [];

  for (let index = 0; index < arr.length; index += 1) {
    const currentItem = arr[index];
    const prevItem = result[index - 1];
    const nextItem = arr[index + 1];
    switch (currentItem) {
      case "--double-next":
        if (nextItem !== undefined) {
          result.push(nextItem);
        }
        break;
      case "--discard-prev":
        if (prevItem !== undefined) {
          result.pop();
        }
        break;
      case "--double-prev":
        if (prevItem !== undefined) {
          result.push(prevItem);
        }
        break;
      case "--discard-next": {
        index += 1;
        break;
      }
      default:
        result.push(currentItem);
    }
  }
  return result;
}

module.exports = {
  transform,
};
