const {Product} = require("./product");

describe("Exists Tests", () => {
    it("Class exists test", () => {
        expect(typeof(Product)).toBe("function");
    });

    it("Obj exists test", () => {
        const product = new Product;
        expect(typeof(product)).toBe("object");
    });

    it("Obj function exists test", () => {
        const product = new Product;
        expect(typeof(product.maxProduct)).toBe("function");
    });
});

