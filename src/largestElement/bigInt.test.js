const num = require("./bigInt");
test ("Example", () => {
    expect("test").toBe("test");
});

test ("Test #1", () => {
    expect(num.biggestInt(2,[7,6,5,4,3,2,1])).toEqual([6,7]);
});

test ("Test #2", () => {
    expect(num.biggestInt(2,[10,9,8,7,6,5,4,3,2,1])).toEqual([9,10]);
});