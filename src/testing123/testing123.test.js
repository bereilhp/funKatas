const {LineNumber} = require("./testing123");

describe("Check if they exist", () => {
    it("Class exists", () => {
        expect(typeof(LineNumber)).toBe("function");
    });

    it("Object exists", () => {
        const lineNumber = new LineNumber();
        expect(typeof(lineNumber)).toBe("object");
    });
});
