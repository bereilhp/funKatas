const Str = require("./splitStrings.js");
let str = new Str;

test ("Class created", () => {
    expect(typeof(Str)).toBe("function");
});

test ("Object created", () => {
    expect(typeof(str)).toBe("object");
});

test ("Object function created", () => {
    expect(typeof(str.split)).toBe("function");
});

test ("Testing function simple test", () => {
    expect(str.split("Hello")).toBe("Hello");
});
