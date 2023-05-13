const { Survive } = require("./survive");

describe("Class and object exist", () => {
    it("Class typeof", () => {
        expect(typeof(Survive)).toBe("function");
    });

    it("Object typeof", () => {
        const survive = new Survive; //Same thing as Survive()
        expect(typeof(survive)).toBe("object");
    });

});
