const { permutation } = require("./shuffle");

describe("Tests", () => {
  it("typeof permutation", () => {
    expect(typeof permutation).toBe("function");
  });

  it("permutation #1", () => {
    expect(permutation([1, 2])).toEqual(2);
  });

  it("permutation #2", () => {
    expect(permutation([1, 2, 3])).toEqual(6);
  });
});
