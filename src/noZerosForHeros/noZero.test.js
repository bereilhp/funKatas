const {Zero} = require("./noZero");

describe("Test if they exist", () => {
    it("Class Exists", () => {
        expect(typeof(Zero)).toBe("function");
    });
});
