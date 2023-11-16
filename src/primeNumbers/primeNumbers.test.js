const { isPrime } = require("./prime");

describe("isPrime", () => {
  it("typeof", () => {
    expect(typeof isPrime).toBe("function");
  });

  it("Simple test false", () => {
    expect(isPrime(49)).toBe(false);
  });

  it("Simple test true", () => {
    expect(isPrime(7)).toBe(true);
  });
});
