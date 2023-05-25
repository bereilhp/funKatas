const {Sequence} = require("./sumOfSequence");

describe("Simple test function", () => {
    it("First Test", () => {
        const sequence = new Sequence;
        expect(typeof(sequence)).toBe("object");
    });
});