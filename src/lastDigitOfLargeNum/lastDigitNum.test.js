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

test ("num.lastDigit simple 4^2", () => {
    expect(num.lastDigit(4,2)).toBe(6);
});

test ("num.lastDigit simple 9^7", () => {
    expect(num.lastDigit(9,7)).toBe(9);
});

test ("num.lastDigit simple 10^100", () => {
    expect(num.lastDigit(10,100)).toBe(0);
});