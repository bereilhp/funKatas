const Spin = require("./spin.js");
let text = new Spin;

test ("Object text created", () => {
    expect(typeof(text)).toBe("object");
});

test ("Object has function created", () => {
    expect(typeof(text.spinner)).toBe("function");
});

test ("Function spinner", () => {
    expect(text.spinner("Hey fellow warriors")).toBe(2);
});