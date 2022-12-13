const square = require("./square.js")
test ("Prove if function exist", () => {
    expect(typeof(square)).toBe("function");
});

test ("Square a number", () => {
    expect(square(5)).toBe(25);
});

test ("Square a number with two values", () => {
    expect(square(50)).toBe(250);
});

