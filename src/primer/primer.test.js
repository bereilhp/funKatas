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
