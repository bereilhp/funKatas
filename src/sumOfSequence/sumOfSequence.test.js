const {Sequence} = require("./sumOfSequence");

describe("Simple test function", () => {
    it("First Test", () => {
        const sequence = new Sequence;
        expect(typeof(sequence)).toBe("object");
    });

    it("Simple test of function sum", () => {
        const sequence = new Sequence;
        expect(sequence.sum(2,1,2)).toBe(0);
    });
});