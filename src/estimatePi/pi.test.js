const Pi = require("./pi.js");
let getPi = new Pi;

test ("Example", () => {
    expect("test").toBe("test");
});

test ("getPi", () => {
    expect(typeof(getPi)).toEqual("object");
});