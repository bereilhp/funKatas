const Pi = require("./pi.js");
let getPi = new Pi;

test ("Example", () => {
    expect("test").toBe("test");
});

test ("getPi", () => {
    expect(typeof(getPi)).toEqual("object");
});

test ("getPi and estimate pi", () => {
    expect(getPi.estimatePi(1000000)).toBeCloseTo(3.14,2);
});