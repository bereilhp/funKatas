const twoVal = require("./length");

test ("Length two val", () => {
    expect(twoVal(2, "a", "b")).toEqual(["a", "b"]);
});

test ("Same test from description", () => {
    expect(twoVal(5, true, false)).toEqual([true, false, true, false, true])
})