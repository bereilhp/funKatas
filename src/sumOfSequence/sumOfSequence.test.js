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

    it("Simple test of function sum end and begin equal", () => {
        const sequence = new Sequence;
        expect(sequence.sum(2,2,2)).toBe(2);
    });

    it("Simple test of function sum begin < end", () => {
        const sequence = new Sequence;
        expect(sequence.sum(2,4,2)).toBe(6);
    });

    it("Medium Test", () => {
        const sequence = new Sequence;
        expect(sequence.sum(2,6,2)).toBe(12);
    });
});