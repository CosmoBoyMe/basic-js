const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;

  matrix.reverse().forEach((row, rowIndex) => {
    row.forEach((ceil, ceilIndex) => {
      const nextRow = matrix[rowIndex + 1];
      if (nextRow !== undefined) {
        if (nextRow[ceilIndex] !== 0) {
          sum += ceil;
        }
      }
      if (nextRow === undefined) {
        sum += ceil;
      }
    });
  });
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
