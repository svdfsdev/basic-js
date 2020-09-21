const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("It's not array!");
  }

  let res = arr.slice();

  for (let i = 0; i < res.length; i++) {
    if (res[i] === '--double-prev') {
      if (res[i - 1] !== undefined) {
        res[i] = res[i - 1];
      } else {
        res[i] = null;
      }
    } else if (res[i] === '--double-next') {
      if (res[i + 1] !== undefined) {
        res[i] = res[i + 1];
      } else {
        res[i] = null;
      }
    } else if (res[i] === '--discard-prev') {
      if (res[i - 1] !== undefined) {
        res[i - 1] = null;
        res[i] = null;
      } else {
        res[i] = null;
      }
    } else if (res[i] === '--discard-next') {
      if (res[i + 1] !== undefined) {
        res[i + 1] = null;
        res[i] = null;
      } else {
        res[i] = null;
      }
    }
  }

  return res.filter((el) => el != null);
};
