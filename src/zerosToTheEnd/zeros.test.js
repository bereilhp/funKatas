const num = require("./zeros");

test ("typeof num", () => {
    expect(typeof(num)).toBe("object");
});

test ("typeof num.moveZeros", () => {
    expect(typeof(num.moveZeros)).toBe("function");
});

test ("num.moveZeros simplest test", () => {
    expect(num.moveZeros([0,0,0,0])).toEqual([0,0,0,0]);
});

test ("num.moveZeros move zeros test", () => {
    expect(num.moveZeros([0,0,0,0,1])).toEqual([1,0,0,0,0]);
});