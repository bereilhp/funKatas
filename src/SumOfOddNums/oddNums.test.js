const oddNum = require("./oddNums")
test ("Test #1", () => {
    expect(typeof(oddNum)).toBe("object");
});

test ("Test #2", () => {
    expect(oddNum.calculateSum(1)).toBe(1);
});
