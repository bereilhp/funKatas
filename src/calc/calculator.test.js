const { add, sub, mul, div, mod, exp } = require("./calculator");
const addy = require("./calculator").add
test ("Add test", () => {
    expect(addy(4,5)).toBe(9);
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

test ("Mod test", () => {
    expect(mod(30,7)).toBe(2);
});

test ("Exp test", () => {
    expect(exp(2,4)).toBe(16);
});