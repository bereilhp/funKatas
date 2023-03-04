const Num = require("./digitalRoot");
let nums = new Num();

test ("Class Num", () => {
    expect(typeof(Num)).toBe("function");
});

test ("Class Num create object nums", () => {
    expect(typeof(nums)).toBe("object");
});
