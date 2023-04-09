const highLow = require("./highLow.js");
test ("Simple easy test to order", () => {
    expect(highLow("2 1 3 5")).toEqual("5 1");
});

test ("hard test with negatives", () => {
    expect(highLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")).toEqual("42 -9");
});