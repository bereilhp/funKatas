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
});

describe("Testing function primeNumber working properly", () => {
    let numObj = new num();

    it("PrimeNumber Function test 0", () => {
        expect(numObj.primeNumber(0)).toBe("Not valid Number");
    });
});
