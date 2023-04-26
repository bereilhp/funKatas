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
    test ("Function simple test", () => {
        expect(numObj.primeNumber(10)).toBe(10);
    });

    it("Function throw Error when negative test", () => {
        expect(numObj.primeNumber(-1)).toBe("Negative Number");
    });

    it("Function throw Error when not a number", () => {
        expect(numObj.primeNumber("s")).toBe("Error: Not a Number");
    });
});
