const {InvertValues} = require("./invertValues");

describe("Test class, obj and function exists", () => {
    it("Class InvertValues exists", () => {
        expect(typeof(InvertValues)).toBe("function");
    });

    it("Obj invertValues exists", () => {
        const invertValues = new InvertValues();
        expect(typeof(invertValues)).toBe("object");
    });

    it("Function invert exists", () => {
        const invertValues = new InvertValues();
        expect(typeof(invertValues.invert)).toBe("function");
    });
});

describe("Test class, obj and function exists", () => {
    it("Empty array test", () => {
        const invertValues = new InvertValues();
        expect(invertValues.invert([])).toEqual([]);
    });
});