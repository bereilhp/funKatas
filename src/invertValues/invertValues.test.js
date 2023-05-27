const {InvertValues} = require("./invertValues");

describe("Test Class, Obj and Function Exists", () => {
    it("Class InvertValues Exists", () => {
        expect(typeof(InvertValues)).toBe("function");
    });

    it("Obj InvertValues Exists", () => {
        const invertValues = new InvertValues();
        expect(typeof(invertValues)).toBe("object");
    });
});
