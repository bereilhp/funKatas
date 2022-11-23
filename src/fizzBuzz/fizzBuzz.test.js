const x = require('./fizzBuzz');

test("Check if number div by 3 and prints fizz", () => {
    expect(x(3)).toEqual("fizz");
})

test("Check if number div by 5 and prints buzz", () => {
    expect(x(5)).toEqual("buzz");
})

test("Check if number is not div by 5 or 3 and print the number", () => {
    expect(x(1)).toEqual(1);
})

test("Check if number is  div by 5 and 3 and print the number", () => {
    expect(x(15)).toEqual("fizzBuzz");
    console.log("The number 15 prints " + x(15));
})

