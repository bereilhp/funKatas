const Spin = require("./spin.js");
let text = new Spin;

test ("Object text created", () => {
    expect(typeof(text)).toBe("object");
});

test ("Object has function created", () => {
    expect(typeof(text.spinner)).toBe("function");
});

test ("Function spinner", () => {
    expect(text.spinner("Hey fellow warriors")).toBe("Hey wollef sroirraw");
});

test ("Function spinner #2", () => {
    expect(text.spinner("This is a test")).toBe("This is a test");
});