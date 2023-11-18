const { isPrime, getPrimes } = require("./prime");

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

describe("getPrimes", () => {
  it("typeof", () => {
    expect(typeof getPrimes).toBe("function");
  });

  it("typeof", () => {
    expect(getPrimes(0, 2)).toEqual([2]);
  });
});
