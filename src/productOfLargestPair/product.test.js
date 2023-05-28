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

describe("maxProduct() tests", () => {
    it("Function maxProduct() test", () => {
        const product = new Product;
        expect(product.maxProduct([1,2,3])).toBe(6);
    });

    it("Function maxProduct() test 2", () => {
        const product = new Product;
        expect(product.maxProduct([2, 1, 5, 0, 4, 3])).toBe(20);
    });

    it("Function maxProduct() test 3", () => {
        const product = new Product;
        expect(product.maxProduct([7, 8, 9])).toBe(72);
    });
});