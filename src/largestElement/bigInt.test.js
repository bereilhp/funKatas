const num = require("./bigInt")
test ("Example", () => {
    expect("test").toBe("test");
});

test ("Test #1", () => {
    expect(num.biggestInt(2,[7,6,5,4,3,2,1])).toEqual([6,7]);
});
