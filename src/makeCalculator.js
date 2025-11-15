'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculate = {
    result: 0,
    add(n) {
      calculate.result += n;

      return this;
    },
    subtract(n) {
      calculate.result -= n;

      return this;
    },
    multiply(n) {
      calculate.result *= n;

      return this;
    },
    divide(n) {
      calculate.result /= n;

      return this;
    },
    reset() {
      calculate.result = 0;

      return this;
    },
    operate(callback, n) {
      callback(n);

      return this;
    },
  };

  return calculate;
}

module.exports = makeCalculator;
