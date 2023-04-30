const {num} = require("./primer");

describe("Object and Function exists", () => {
    let numObj = new num();
    
    test ("Object exists", () => {
        expect(typeof(numObj)).toBe("object");
    });

    test ("Function exists", () => {
        expect(typeof(numObj.primeNumber)).toBe("function");
    });
});

describe("Testing function primeNumber input",() =>{
    let numObj = new num();

    it("Function throw Error when negative test", () => {
        expect(numObj.primeNumber(-1)).toBe("Not valid Number");
    });

    it("Function throw Error when not a number", () => {
        expect(numObj.primeNumber("s")).toBe("Error: Not a Number");
    });

    it("PrimeNumber Function test 0", () => {
        expect(numObj.primeNumber(0)).toBe("Not valid Number");
    });

    it("PrimeNumber Function test 1", () => {
        expect(numObj.primeNumber(1)).toBe("Not valid Number");
    });
});

describe("Testing function primeNumber working properly", () => {
    let numObj = new num();

    it("PrimeNumber Function test 2", () => {
        expect(numObj.primeNumber(2)).toBe(true);
    });

    it("PrimeNumber Function test 3", () => {
        expect(numObj.primeNumber(3)).toBe(true);
    });

    it("PrimeNumber Function test 4", () => {
        expect(numObj.primeNumber(4)).toBe(false);
    });

    it("PrimeNumber Function test 5", () => {
        expect(numObj.primeNumber(5)).toBe(true);
    });

    it("PrimeNumber Function test 6", () => {
        expect(numObj.primeNumber(6)).toBe(false);
    });

    it("PrimeNumber Function test 7", () => {
        expect(numObj.primeNumber(7)).toBe(true);
    });

    it("PrimeNumber Function test 11", () => {
        expect(numObj.primeNumber(11)).toBe(true);
    });

    it("PrimeNumber Function test 21", () => {
        expect(numObj.primeNumber(21)).toBe(false);
    });

    it("PrimeNumber Function test 33", () => {
        expect(numObj.primeNumber(33)).toBe(false);
    });

    it("PrimeNumber Function test 37", () => {
        expect(numObj.primeNumber(37)).toBe(true);
    });

    it("PrimeNumber Function test 41", () => {
        expect(numObj.primeNumber(41)).toBe(true);
    });

    it("PrimeNumber Function test 47", () => {
        expect(numObj.primeNumber(47)).toBe(true);
    });

    it("PrimeNumber Function test 51", () => {
        expect(numObj.primeNumber(51)).toBe(false);
    });

    it("PrimeNumber Function test 67", () => {
        expect(numObj.primeNumber(67)).toBe(true);
    });

    it("PrimeNumber Function test 101", () => {
        expect(numObj.primeNumber(101)).toBe(true);
    });

});
