/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
let argumentsLength = function (...args) {
  return args.length;
};

module.exports = argumentsLength;
