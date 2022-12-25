const heron = require("./heron.js");
test ("Example", () => {
    expect("test").toBe("test");
})

test ("#1 Test - Calculate S", () => {
    expect(heron.calculateS(1,2,2)).toBe(2.5)
})

test ("#2 Test - Calculate S", () => {
    expect(heron.calculate(1,2,2)).toBe(0.97)
})