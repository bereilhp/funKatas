const add = require("./adders.js")
test ("Example", () => {
    expect("test").toBe("test");
});



test("Test #1 - add two numbers",() => {
    expect(add(1,2)).toBe(3);
})
