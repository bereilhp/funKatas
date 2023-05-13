const { Survive } = require("./survive");

describe("Class and object exist", () => {
    it("Class typeof", () => {
        expect(typeof(Survive)).toBe("function");
    });

    it("Object typeof", () => {
        const survive = new Survive; //Same thing as Survive()
        expect(typeof(survive)).toBe("object");
    });

    it("Function typeof", () => {
        const survive = new Survive;
        expect(typeof(survive.isHeGonnaSurvive)).toBe("function");
    });

});

describe("isHeGonnaSurvive funciton tests", () => {
    it("Simple test", () => {
        const survive = new Survive;
        expect(survive.isHeGonnaSurvive(4,2)).toBe(true);
    });
});
