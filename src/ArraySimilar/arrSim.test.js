let Similar = require("./arrSim");
let array = new Similar();

let arr1 = [1, 2, 2, 3, 4];
let arr2 = [2, 1, 2, 4, 3];
let arr3 = [1, 2, 3, 4];
let arr4 = [1, 2, 3, "4"];

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

test ("Test if the object function works properly", () => {
    expect(array.arraySimilar([3,2,1], [1,2,3])).toEqual(true);
});

test ("Test if the object function works properly with strings", () => {
    expect(array.arraySimilar([1, 2, 3, 4], [1, 2, 3, "4"])).toEqual(false);
});

test ("Test if the object function works properly with lots of numbers", () => {
    expect(array.arraySimilar(arr1, arr2)).toEqual(true);
    expect(array.arraySimilar(arr2, arr3)).toEqual(false);
    expect(array.arraySimilar(arr3, arr4)).toEqual(false)
});


