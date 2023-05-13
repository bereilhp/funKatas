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

    it("Simple test 2", () => {
        const survive = new Survive;
        expect(survive.isHeGonnaSurvive(10,5)).toBe(true);
    });

    it("Simple test 3", () => {
        const survive = new Survive;
        expect(survive.isHeGonnaSurvive(7,4)).toBe(false);
    });

    it("Simple test 4", () => {
        const survive = new Survive;
        expect(survive.isHeGonnaSurvive(4,5)).toBe(false);
    });
});
