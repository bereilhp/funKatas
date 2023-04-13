const { num } = require("./lastDigitNum.js");

test ("Typeof num", () => {
    expect(typeof(num)).toBe("object");
});

test ("Typeof num.lastDigit", () => {
    expect(typeof(num.lastDigit)).toBe("function");
});

test ("num.lastDigit simple 0^0", () => {
    expect(num.lastDigit(0,0)).toBe(1);
});

test ("num.lastDigit simple 4^1", () => {
    expect(num.lastDigit(4,1)).toBe(4);
});