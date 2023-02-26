let Similar = require("./arrSim");
let array = new Similar();

test ("Test created object workd properly", () => {
    expect(array).toEqual({});
});

test ("Test if it is really an object", () => {
    expect(typeof(array)).toEqual("object");
});

test ("Test if the class is a function", () => {
    expect(typeof(Similar)).toEqual("function");
});