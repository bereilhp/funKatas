const solution = require("./missingInteger")

test("Simple test", () => {
  expect(solution([1,2])).toBe(3);
});

test("Complex test", () => {
  expect(solution([1,2,5])).toBe(3);
});