const Spin = require("./spin.js");
let text = new Spin;

test ("Object text created", () => {
    expect(typeof(text)).toBe("object");
});