const capital = require("./capitals.js");
test ("Example", () => {
    expect("test").toBe("test");
})

test("Check if functions exists", () => {
    expect(typeof(capital)).toBe("function")
});

test("Return object in a string using state", () => {
    expect(capital({state: "Maine", capital: "Augusta"})).toBe("The capital of Maine is Augusta")
});

test("Return object in a string using country", () => {
    expect(capital({country: "Spain", capital: "Madrid"})).toBe("The capital of Spain is Madrid")
});