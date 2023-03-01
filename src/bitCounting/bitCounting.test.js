const Num = require("./bitCounting.js");
let number = new Num();

test ("Object number test", () => {
    expect(typeof(number)).toBe("object");
});

test ("Object number function test", () => {
    expect(typeof(number.bitCounting)).toBe("function");
});

test ("Object number function test", () => {
    expect(number.bitCounting(12)).toBe("1100");
});