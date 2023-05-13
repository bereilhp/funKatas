const { Survive } = require("./survive");

describe("Class and object exist", () => {
    it("Class typeof", () => {
        expect(typeof(Survive)).toBe("function");
    });
});
