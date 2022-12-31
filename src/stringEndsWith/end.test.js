const stringy = require("./end.js")
test ("Example", () => {
    expect("test").toBe("test");
});

test("Test Objetct Exists", () => {
    expect(typeof(stringy)).toBe("object");
});

test("Test Objetct function Exists", () => {
    expect(typeof(stringy.endWith)).toBe("function");
});

test("Test #1", () => {
    expect(stringy.endWith("abcd","bcd")).toBe(true);
});

test("Test #2", () => {
    expect(stringy.endWith("abc","d")).toBe(false);
});

test("Test #3", () => {
    expect(stringy.endWith("abcde","abc")).toBe(false);
});