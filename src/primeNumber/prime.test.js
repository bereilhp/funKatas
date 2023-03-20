const prime = require("./prime");

test ("Type prime", () => {
    expect(typeof(prime)).toBe("object");
});

test ("Type prime.is_prime", () => {
    expect(typeof(prime.is_prime)).toBe("function");
});

test ("prime.is_prime test 2", () => {
    expect(prime.is_prime(6)).toBe(false);
});

test ("prime.is_prime test 2", () => {
    expect(prime.is_prime(0)).toBe(false);
});