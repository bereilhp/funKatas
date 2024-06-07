/**
 * @param {number[]} nums
 * @return {number[]}
 */
let getConcatenation = function (nums) {
  nums.forEach((num) => {
    nums.push(num);
  });

  return nums;
};

module.exports = getConcatenation;
