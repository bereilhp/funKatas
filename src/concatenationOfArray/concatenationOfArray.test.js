const getConcatenation = require("./concatenationOfArray");

describe("Tests", () => {
  it("Function exists", () => {
    expect(typeof getConcatenation).toBe("function");
  });

  it("Simple test", () => {
    expect(getConcatenation([1, 2, 3, 4, 5])).toEqual([
      1, 2, 3, 4, 5, 1, 2, 3, 4, 5,
    ]);
  });

  it("Complex test", () => {
    expect(getConcatenation([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1]);
  });
});
