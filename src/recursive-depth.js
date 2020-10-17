const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  depth = 1;
  depthList = [];

  calculateDepth(arr) {
    if (Array.isArray(arr)) {

      arr.forEach((el) => {
        if (Array.isArray(el)) {
          this.depth += 1;
          
          this.calculateDepth(el);
        }
      });

      this.depthList.push(this.depth);
      this.depth = 1;
    }

    return Math.max(...this.depthList);
  }
};
