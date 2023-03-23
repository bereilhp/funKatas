const conversor = require("./conversorIPv4");

test ("typeof conversor", () => {
    expect(typeof(conversor)).toBe("object");
});

test ("typeof conversor.ipv4", () => {
    expect(typeof(conversor.ipv4)).toBe("function");
});