const num = require("./zeros");

test ("typeof num", () => {
    expect(typeof(num)).toBe("object");
});

test ("typeof num.moveZeros", () => {
    expect(typeof(num.moveZeros)).toBe("function");
});