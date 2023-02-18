const Words = require("./wordCounter");
let word = new Words("string")

beforeEach(() => {
    let word = new Words("string")
    return word;
});

test ("Example", () => {
    expect("test").toBe("test");
});

test ("Test typeof class words", () => {
    expect(typeof(Words)).toBe("function");
});

test ("Test class words create a word", () => {
    expect(word).toEqual({"type": "string"});
});

test ("Test class words create a word with type string", () => {
    expect(word.type).toEqual("string");
});

test ("Test object word function counter", () => {
    expect(typeof(word.counter)).toEqual("function");
});

test ("Test object word function counter words #0", () => {
    expect(word.counter("Hello world")).toEqual(2);
});

test ("Test object word function counter words #1", () => {
    expect(word.counter("Hello")).toEqual(1);
});

test ("Test object word function counter words #2", () => {
    expect(word.counter('No results for search term `s`')).toEqual(6);
});

test ("Test object word function counter words #3", () => {
    expect(word.counter(' Hello')).toEqual(1);
});











