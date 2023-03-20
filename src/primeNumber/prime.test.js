const prime = require("./prime");

test ("Type prime", () => {
    expect(typeof(prime)).toBe("object");
});

test ("Type prime.is_prime", () => {
    expect(typeof(prime.is_prime)).toBe("function");
});

test ("prime.is_prime test 6", () => {
    expect(prime.is_prime(6)).toBe(false);
});

test ("prime.is_prime test 0", () => {
    expect(prime.is_prime(0)).toBe(false);
});

test ("prime.is_prime test 1", () => {
    expect(prime.is_prime(1)).toBe(false);
});

test ("prime.is_prime test 7", () => {
    expect(prime.is_prime(7)).toBe(true);
});

test ("prime.is_prime test 43", () => {
    expect(prime.is_prime(43)).toBe(true);
});