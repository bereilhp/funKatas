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

test ("num.moveZeros move zeros test many nums", () => {
    expect(num.moveZeros([0,0,0,0,1,4,5])).toEqual([1, 4, 5, 0, 0, 0, 0]);
});

test ("num.moveZeros move zeros test letter", () => {
    expect(num.moveZeros([0,0,0,0,"a"])).toEqual(["a", 0, 0, 0, 0]);
});

test ("num.moveZeros move zeros test letter and num", () => {
    expect(num.moveZeros([0,0,0,0,"a",1,2])).toEqual(["a",1,2, 0, 0, 0, 0]);
});

test ("num.moveZeros move zeros test true and nums", () => {
    expect(num.moveZeros([0,0,0,0,true,1,2])).toEqual([true, 1, 2, 0, 0, 0, 0]);
});