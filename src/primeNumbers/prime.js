/**
 *
 * @param {number} number
 * @returns true of false
 */
const isPrime = (number) => {
  let s = Math.sqrt(number);
  for (let i = 2; i <= s; i++) {
    if (number % i === 0) return false;
  }
  return number >= 2;
};

/**
 *
 * @param {number} start
 * @param {number} finish
 * @returns Sequence of all prime number from start to finish
 */
const getPrimes = (start, finish) => {
  return start, finish;
};

module.exports = { isPrime, getPrimes };
