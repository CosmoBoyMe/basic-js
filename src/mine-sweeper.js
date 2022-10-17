const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrixRowsCount = matrix[0].length;
  const matrixColumnsCount = matrix.length;
  const newMatrix = [...new Array(matrixColumnsCount)].map(
    () => new Array(matrixRowsCount)
  );

  matrix.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      let minesCount = 0;
      if (matrix[rowIndex][cellIndex - 1]) minesCount += 1;
      if (matrix[rowIndex][cellIndex + 1]) minesCount += 1;
      if (rowIndex > 0) {
        const prevRow = matrix[rowIndex - 1];
        if (prevRow[cellIndex - 1]) minesCount += 1;
        if (prevRow[cellIndex]) minesCount += 1;
        if (prevRow[cellIndex + 1]) minesCount += 1;
      }
      if (rowIndex !== matrixColumnsCount - 1) {
        const nextRow = matrix[rowIndex + 1];
        if (nextRow[cellIndex - 1]) minesCount += 1;
        if (nextRow[cellIndex]) minesCount += 1;
        if (nextRow[cellIndex + 1]) minesCount += 1;
      }
      newMatrix[rowIndex][cellIndex] = minesCount;
    });
  });

  return newMatrix;
}

module.exports = {
  minesweeper,
};
