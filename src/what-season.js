const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (date.hasOwnProperty('getFullYear')) {
    throw Error;
  }

  const month = date.getMonth();

  return month == 11 || month <= 1
    ? 'winter'
    : month <= 4
    ? 'spring'
    : month <= 7
    ? 'summer'
    : 'autumn';
};
