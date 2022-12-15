const capital = require("./capitals.js")
test ("Example", () => {
    expect("test").toBe("test");
})

test("Check if functions exists", () => {
    expect(typeof(capital)).toBe("function")
});