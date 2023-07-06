const {Reverse} = require("./reverseList");

describe("Test if they exist", () => {
    it("Class exists", () => {
        expect(typeof(Reverse)).toBe("function");
    });

    it("Object exists", () => {
        const reverse = new Reverse();
        expect(typeof(reverse)).toBe("object");
    });

    it("Function exists", () => {
        const reverse = new Reverse();
        expect(typeof(reverse.reverseList)).toBe("function");
    });
});

describe("Function tests", () => {
    it("Simple reverse test", () => {
        const reverse = new Reverse();
        expect(reverse.reverseList([1,2,3])).toEqual([3,2,1]);
    });
});