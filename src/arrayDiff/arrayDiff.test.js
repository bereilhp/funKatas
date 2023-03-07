const Arr = require("./arrayDiff");
let array = new Arr();

test ("type object array", () => {
    expect(typeof(array)).toBe("object");
});

test ("type function object array", () => {
    expect(typeof(array.diff)).toBe("function");
});

test ("type function object array", () => {
    expect(array.diff([1,2,3], [1,2])).toBe("function");
});
