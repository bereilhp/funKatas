const summation = require("./sum");

test ("Sum from 1 to 2", () => {
    expect(summation(2)).toBe(3);
});

test ("Sum from 1 to 8", () => {
    expect(summation(8)).toBe(36);
});
