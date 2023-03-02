const Num = require("./desOrder.js");
let number = new Num();

test ("Object number", () => {
    expect(typeof(number)).toBe("object");
});

test ("Object number", () => {
    expect(typeof(number.orderInv)).toBe("function");
});