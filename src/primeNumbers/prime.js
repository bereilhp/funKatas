const isPrime = (number) => {
  let s = Math.sqrt(number);
  for (let i = 2; i <= s; i++) {
    if (number % i === 0) return false;
  }
  return number >= 2;
};

const getPrimes = (start, finish) => {
  return start, finish;
};

module.exports = { isPrime, getPrimes };
