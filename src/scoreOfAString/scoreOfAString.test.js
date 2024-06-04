let scoreOfString = require("./scoreOfAString");

describe("Tests", () => {
  it("Check if function exists", () => {
    expect(typeof scoreOfString).toBe("function");
  });

  it("Simple test", () => {
    expect(scoreOfString("ab")).toBe(1);
  });

  it("Complex", () => {
    expect(scoreOfString("abc")).toBe(2);
  });

  it("Hello test", () => {
    expect(scoreOfString("hello")).toBe(13);
  });
});
