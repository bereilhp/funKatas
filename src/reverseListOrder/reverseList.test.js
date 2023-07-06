const {Reverse} = require("./reverseList");

describe("Test if they exist", () => {
    it("Class exists", () => {
        expect(typeof(Reverse)).toBe("function");
    });
});
