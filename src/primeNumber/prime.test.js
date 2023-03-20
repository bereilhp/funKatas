const prime = require("./prime");

test ("Type prime", () => {
    expect(typeof(prime)).toBe("object");
});

test ("Type prime.is_prime", () => {
    expect(typeof(prime.is_prime)).toBe("function");
});