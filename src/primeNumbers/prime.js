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
  let ans = new Array();
  if (start > finish) {
    let str = finish;
    let fin = start;
    for (let i = str; i <= fin; i++) {
      if (isPrime(i)) {
        ans.push(i);
      }
    }
    return ans;
  } else {
    for (let i = start; i <= finish; i++) {
      if (isPrime(i)) {
        ans.push(i);
      }
    }
    return ans;
  }
};

module.exports = { isPrime, getPrimes };
