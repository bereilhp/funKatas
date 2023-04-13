const { num } = require("./lastDigitNum.js");

test ("Typeof num", () => {
    expect(typeof(num)).toBe("object");
});

test ("Typeof num.lastDigit", () => {
    expect(typeof(num.lastDigit)).toBe("function");
});