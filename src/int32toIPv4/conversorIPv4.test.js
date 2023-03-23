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

test ("Test ipv4 conversor small num", () => {
    expect(conversor.ipv4(0)).toBe("0.0.0.0");
});

test ("Test ipv4 conversor random", () => {
    expect(conversor.ipv4(748867874)).toBe("44.162.209.34");
});

test ("Test ipv4 conversor random", () => {
    expect(conversor.ipv4(32)).toBe("0.0.0.32");
});