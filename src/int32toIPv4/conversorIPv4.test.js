const conversor = require("./conversorIPv4");

test ("typeof conversor", () => {
    expect(typeof(conversor)).toBe("object");
});

test ("typeof conversor.ipv4", () => {
    expect(typeof(conversor.ipv4)).toBe("function");
});

test ("Test ipv4 conversor", () => {
    expect(conversor.ipv4(2149583361)).toBe("128.32.10.1");
});