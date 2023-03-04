const Num = require("./digitalRoot");
let nums = new Num();

test ("Class Num", () => {
    expect(typeof(Num)).toBe("function");
});

test ("Class Num create object nums", () => {
    expect(typeof(nums)).toBe("object");
});

test ("Class Num create object nums", () => {
    expect(nums.digitalRoot(24)).toBe(6);
});
