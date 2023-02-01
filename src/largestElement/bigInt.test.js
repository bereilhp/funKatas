const num = require("./bigInt")
test ("Example", () => {
    expect("test").toBe("test");
});

test ("Test #1", () => {
    expect(num.biggestInt(1,2)).toBe(2);
});
