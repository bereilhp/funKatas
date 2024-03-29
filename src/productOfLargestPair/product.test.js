const {Product} = require("./product");
const {Productv} = require("./productv2");

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

    it("Function maxProduct() test 4", () => {
        const product = new Product;
        expect(product.maxProduct([33, 231, 454, 11, 9, 99, 57])).toBe(104874);
    });

    it("Function maxProduct() test new approach", () => {
        const productv = new Productv;
        expect(productv.maxProduct([33, 231, 454, 11, 9, 99, 57])).toBe(104874);
    });

});