const ext  = require("./ext.js");

test ("Typeof object", () => {
    expect(typeof(ext)).toBe("object");
});

test ("Typeof object function", () => {
    expect(typeof(ext.diff)).toBe("function");
});