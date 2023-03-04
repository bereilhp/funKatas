const Num = require("./digitalRoot");
let nums = new Num();

test ("Class Num", () => {
    expect(typeof(Num)).toBe("function");
});

test ("Class Num create object nums", () => {
    expect(typeof(nums)).toBe("object");
});

test ("Function digital root test simple number", () => {
    expect(nums.digitalRoot(24)).toBe(6);
});

test ("Function digital root test complex number", () => {
    expect(nums.digitalRoot(942)).toBe(6);
});

test ("Function digital root test complex number 2", () => {
    expect(nums.digitalRoot(132189)).toBe(6);
});

test ("Function digital root test complex number 2", () => {
    expect(nums.digitalRoot(493193)).toBe(2);
});

