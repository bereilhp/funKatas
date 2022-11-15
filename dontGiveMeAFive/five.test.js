const count = require('./five');

test("Return correct Numbers", () => {
    expect(count(5,6)).toBe("5 + 6");
})