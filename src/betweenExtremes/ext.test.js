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