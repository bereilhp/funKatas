const argumentsLength = require("./lengthOfArgument");

describe("Tests", () => {
  it("Does the function exists", () => {
    expect(typeof argumentsLength).toBe("function");
  });

  it("Simple test", () => {
    expect(argumentsLength(1, 3, 4)).toBe(3);
  });

  it("Complex test", () => {
    expect(argumentsLength({}, null, "3")).toBe(3);
  });
});
