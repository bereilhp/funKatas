const {Reverse} = require("./reverseList");

describe("Test if they exist", () => {
    it("Class exists", () => {
        expect(typeof(Reverse)).toBe("function");
    });

    it("Object exists", () => {
        const reverse = new Reverse();
        expect(typeof(reverse)).toBe("object");
    });
});
