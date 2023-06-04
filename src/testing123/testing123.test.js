const { Linter } = require("eslint");
const {LineNumber} = require("./testing123");

describe("Check if they exist", () => {
    it("Class exists", () => {
        expect(typeof(LineNumber)).toBe("function");
    });

    it("Object exists", () => {
        const lineNumber = new LineNumber();
        expect(typeof(lineNumber)).toBe("object");
    });

    it("Function exists", () => {
        const lineNumber = new LineNumber();
        expect(typeof(lineNumber.count)).toBe("function");
    });
});

describe("test function count", () => {
    it("Simple empty test", () => {
        const lineNumber = new LineNumber();
        expect(lineNumber.count([])).toEqual([]);
    });
});