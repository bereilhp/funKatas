const { add, testa } = require("./adders.js");

test("Function exist", () => {
  expect(typeof add).toBe("function");
  //create test that test if function exist see it fail, then create function see it pass
});

test("Test #1 - add two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

test("Test #1 - add one letter and one number", () => {
  expect(add("3", 2)).toBe("Not a number");
});
test("Test #1 - add one string of characters and a number", () => {
  expect(add("hola", 2)).toBe("Not a number");
});

test("Test #1 - add a number and a string of characters", () => {
  expect(add(2, "hola")).toBe("Not a number");
});
test("Test #1 - add two strings together", () => {
  expect(add("hola", "hola")).toBe("Not a number");
});

test("Testa", () => {
  expect(testa()).toBe(9);
});
