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
const getMatrixElementsSum = (matrix) => {
  const height = matrix.length;
  const width = matrix[0].length;
  const formatedMatrix = [...matrix];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === 0 && matrix[i + 1]) formatedMatrix[i + 1][j] = 0;
    }
  }

  return formatedMatrix.flat().reduce((acc, x) => acc + x, 0);
};

module.exports = getMatrixElementsSum;
