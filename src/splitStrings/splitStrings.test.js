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
    expect(str.split("Hello")).toEqual(["He", "ll", "o_"]);
});

test ("Testing function abc test", () => {
    expect(str.split("abc")).toEqual(["ab", "c_"]);
});

test ("Testing function abcdef test", () => {
    expect(str.split("abcdef")).toEqual(["ab", "cd", "ef"]);
});

test ("Testing function empty test", () => {
    expect(str.split("")).toEqual([]);
});

