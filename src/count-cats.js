const CustomError = require('../extensions/custom-error');

module.exports = function countCats(matrix) {
  return matrix.reduce((sum, item) => sum + item.filter((el) => el === '^^').length, 0);
};
