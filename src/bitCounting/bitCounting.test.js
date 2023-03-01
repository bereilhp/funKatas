const Num = require("./bitCounting.js");
let number = new Num();

test ("Object number test", () => {
    expect(typeof(number)).toBe("object");
});

test ("Object number function test", () => {
    expect(typeof(number.bitCounting)).toBe("function");
});

test ("Function test 12 to return 2", () => {
    expect(number.bitCounting(12)).toBe(2);
});

test ("Function test 1234 to return 5", () => {
    expect(number.bitCounting(1234)).toBe(5);
});

test ("Function test 0 to return 0", () => {
    expect(number.bitCounting(0)).toBe(0);
});