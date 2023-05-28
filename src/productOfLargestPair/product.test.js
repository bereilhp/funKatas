const {Product} = require("./product");

describe("Exists Tests", () => {
    it("Class exists test", () => {
        expect(typeof(Product)).toBe("function");
    });
});

