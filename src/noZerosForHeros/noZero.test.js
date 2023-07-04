const {Zero} = require("./noZero");

describe("Test if they exist", () => {
    it("Class Exists", () => {
        expect(typeof(Zero)).toBe("function");
    });

    it("Object Exists", () => {
        let zero = new Zero();
        expect(typeof(zero)).toBe("object");
    });

    it("Function Exists", () => {
        let zero = new Zero();
        expect(typeof(zero.removeZeros)).toBe("function");
    });
});

describe("Function tests", () => {
    it("Function Test #1", () => {
        let zero = new Zero();
        expect(zero.removeZeros(100)).toBe(1);
    });
});
