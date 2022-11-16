const sumMult = require("./multiple");
test ("Test for numbers below 10", () => {
    expect(sumMult(10)).toBe(23);
})

test ("Test for zero", () => {
    expect(sumMult(0)).toBe(0);
})