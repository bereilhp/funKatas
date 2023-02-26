let Similar = require("./arrSim");
let array = new Similar();

test ("Test created object works properly", () => {
    expect(array).toEqual({});
});

test ("Test if it is really an object", () => {
    expect(typeof(array)).toEqual("object");
});

test ("Test if the class is a function", () => {
    expect(typeof(Similar)).toEqual("function");
});

test ("Test if the object has a function", () => {
    expect(typeof(array.arraySimilar)).toEqual("function");
});