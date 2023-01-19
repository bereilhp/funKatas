const oddNum = require("./oddNums")
test ("Test #1", () => {
    expect(typeof(oddNum)).toBe("object");
});

test ("Test #2", () => {
    expect(oddNum.calculateSum(2)).toBe(8);
});

test ("Test #3", () => {
    expect(oddNum.calculateSum(42)).toBe(74088);
});