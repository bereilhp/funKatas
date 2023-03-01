const Num = require("./bitCounting.js");
let number = new Num();

test ("Object number test", () => {
    expect(typeof(number)).toBe("object");
});

test ("Object number test", () => {
    expect(typeof(number.bitCounting)).toBe("function");
});