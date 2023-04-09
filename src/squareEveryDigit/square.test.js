const square = require("./square.js");
test ("Prove if function exist", () => {
    expect(typeof(square)).toBe("function");
});

test ("Square a number", () => {
    expect(square(5)).toBe(25);
});

test ("Square a number with two values", () => {
    expect(square(50)).toBe(250);
});

test ("Square a number with two values", () => {
    expect(square(68)).toBe(3664);
});

test ("Square a number with two values", () => {
    expect(square(5584)).toBe(25256416);
});
test ("Square a number with ten values", () => {
    expect(square(5555555555555)).toBe(25252525252525252525252525n);
});


