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

    it("Zero array test", () => {
        const invertValues = new InvertValues();
        expect(invertValues.invert([0])).toEqual([0]);
    });

    it("Simple array 1 to 5", () => {
        const invertValues = new InvertValues();
        expect(invertValues.invert([1,2,3,4,5])).toEqual([-1,-2,-3, -4, -5]);
    });

    it("Simple array 1 to 5 but some are negative", () => {
        const invertValues = new InvertValues();
        expect(invertValues.invert([1,-2,3,-4,5])).toEqual([-1,2,-3,4,-5]);
    });
});