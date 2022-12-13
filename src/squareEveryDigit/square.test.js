const square = require("./square.js")
test ("Prove if function exist", () => {
    expect(typeof(square)).toBe("function");
});

test ("Square a number", () => {
    expect(square(5)).toBe(25);
})