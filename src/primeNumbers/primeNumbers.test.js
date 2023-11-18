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

  it("simple test", () => {
    expect(getPrimes(0, 2)).toEqual([2]);
  });

  it("zero test", () => {
    expect(getPrimes(0, 0)).toEqual([]);
  });

  it("zero to 30", () => {
    expect(getPrimes(0, 30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });
});
