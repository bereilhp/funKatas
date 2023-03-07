const Arr = require("./arrayDiff");
let array = new Arr();

test ("type object array", () => {
    expect(typeof(array)).toBe("object");
});

test ("type function object array", () => {
    expect(typeof(array.diff)).toBe("function");
});
