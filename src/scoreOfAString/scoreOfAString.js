/**
 * @param {string} s
 * @return {number}
 */
let scoreOfString = function (s) {
  let splitString = s.split("");
  let asciiNumbers = [];
  splitString.forEach((letter) => {
    asciiNumbers.push(letter.charCodeAt());
  });
  let subString = [];
  for (let i = 0; i < asciiNumbers.length - 1; i++) {
    subString.push(Math.abs(asciiNumbers[i] - asciiNumbers[i + 1]));
  }

  return subString.reduce((a, b) => a + b, 0);
};

module.exports = scoreOfString;
