const ext  = require("./ext.js");

test ("Typeof object", () => {
    expect(typeof(ext)).toBe("object");
});

test ("Typeof object function", () => {
    expect(typeof(ext.diff)).toBe("function");
});

test ("Function test", () => {
    expect(ext.diff([1,2,3,4,5])).toBe(4);
});

test ("Function test 2", () => {
    expect(ext.diff([23, 3, 19, 21, 16])).toBe(20);
});