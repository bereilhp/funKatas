const { isItALetter } = require("./isItALetter");

describe("Test function exists", () => {
  it("isItALetter() test", () => {
    expect(typeof isItALetter).toBe("function");
  });

  it("Base Case test", () => {
    expect(isItALetter("A")).toBe(true);
  });

  it("Failing Case test", () => {
    expect(isItALetter(3)).toBe(false);
  });

  it("Inserting a word test", () => {
    expect(isItALetter("Hey")).toBe(true);
  });
});
