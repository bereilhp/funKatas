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

test("Test if fucntion exists", () => {
    expect(typeof(trim.trimmerString)).toBe("function")
});

test("Test algorithm 0", () => {
    expect(trim.trimmerString("Creating kata is fun", 14)).toBe("Creating ka...")
});

test("Test algorithm 1", () => {
    expect(trim.trimmerString("Creating kata is fun", 4)).toBe("C...")
});

test("Test algorithm 2", () => {
    expect(trim.trimmerString("He", 1)).toBe("H...")
});

test("Test algorithm 2", () => {
    expect(trim.trimmerString("He", 3)).toBe("He")
});