const bake = require("./baker.js");

test ("Object bake exists", () => {
    expect(typeof(bake)).toBe("object");
});

test ("Object bake has function cake", () => {
    expect(typeof(bake.cake)).toBe("function");
});

test ("Function cake same recipe same ingredients", () => {
    expect(bake.cake(
        {flour: 500, sugar: 200, eggs: 1},
        {flour: 500, sugar: 200, eggs:1}
    )).toEqual(1);
});

test ("Function cake all the same except one ingredient", () => {
    expect(bake.cake(
        {flour: 500, sugar: 200, eggs: 1},
        {flour: 500, sugar: 200}
    )).toEqual(0);
});

test ("Function cake more ingredients than recipe", () => {
    expect(bake.cake(
        {flour: 500},
        {flour: 500, sugar: 200}
    )).toEqual(1);
});

test ("Function cake simple", () => {
    expect(bake.cake(
        {flour: 500},
        {flour: 500}
    )).toEqual(1);
});