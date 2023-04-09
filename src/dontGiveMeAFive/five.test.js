const count = require("./five");

test("1 to 9 return 8", () => {
    expect(count(1,9)).toEqual(8);
});

test("2 to 14 return 10", () => {
    expect(count(2,14)).toEqual(12);
});