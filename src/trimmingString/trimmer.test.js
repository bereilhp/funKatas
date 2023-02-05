const trim = require("./trimmer")
test ("Example", () => {
    expect("test").toBe("test");
});

test("Test if object exists", () => {
    expect(typeof(trim)).toBe("object")
});

test("Test object properties", () => {
    expect(trim["string"]).toBe("test")
});

test("Test object properties", () => {
    expect(trim.string).toBe("test")
});