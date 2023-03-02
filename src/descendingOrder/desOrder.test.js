const Num = require("./desOrder.js");
let number = new Num();

test ("Object number", () => {
    expect(typeof(number)).toBe("object");
});

test ("Object function", () => {
    expect(typeof(number.orderInv)).toBe("function");
});

test ("Function test #1", () => {
    expect(number.orderInv(1234)).toBe(4321);
});

test ("Function test #2", () => {
    expect(number.orderInv(145263)).toBe(654321);
});

test ("Function test #3", () => {
    expect(number.orderInv(123456789)).toBe(987654321);
});

test ("Function test #4", () => {
    expect(number.orderInv(321)).toBe(321);
});