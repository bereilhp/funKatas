const growy = require("./RbutG")
test ("Example", () => {
    expect("test").toBe("test");
});

test("Test if object exists", () => {
    expect(typeof(growy)).toBe("object")
});

test("Test if object exists", () => {
    expect(typeof(growy.reducey)).toBe("function")
});

test("Test if object exists", () => {
    expect(growy.reducey([1, 2, 3, 4])).toBe(24)
});