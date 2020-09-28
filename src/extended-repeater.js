const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  const { addition = '', additionSeparator = '', additionRepeatTimes = 1 } = options;
  const { separator = '+', repeatTimes = 1 } = options;

  const strMaker = (str, separator, repeat) => {
    const newStr = (str + separator).repeat(repeat);

    return newStr.slice(0, newStr.length - separator.length);
  };

  const subRes = strMaker(addition, additionSeparator, additionRepeatTimes);

  return strMaker(str + subRes, separator, repeatTimes);
};
