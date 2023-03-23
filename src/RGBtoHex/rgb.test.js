const conversor = require("./rgb.js");

test ("typeof conversor", () => {
    expect(typeof(conversor)).toBe("object");
});

test ("typeof conversor.rgb", () => {
    expect(typeof(conversor.rgb)).toBe("function");
});