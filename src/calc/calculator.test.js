const { add, sub, mul, div } = require("./calculator");
test ("Add test", () => {
    expect(add(4,5)).toBe(9);
});

test ("Sub test", () => {
    expect(sub(6,5)).toBe(1);
});

test ("Mul test", () => {
    expect(mul(6,5)).toBe(30);
});

test ("Div test", () => {
    expect(div(30,5)).toBe(6);
});