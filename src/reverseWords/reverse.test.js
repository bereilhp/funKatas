const Word = require("./reverse.js");
let words = new Word;


test ("Example", () => {
    expect("test").toBe("test");
});

test ("Word class", () => {
    expect(typeof(Word)).toBe("function");
});

test ("Word class create words object", () => {
    expect(typeof(words)).toBe("object");
});

test ("words function", () => {
    expect(typeof(words.reverseWord)).toBe("function");
});

test ("words function test", () => {
    expect(words.reverseWord("Hello")).toEqual("olleH");
});

test ("words function test string with more than one word", () => {
    expect(words.reverseWord("Hello World")).toEqual("olleH dlroW");
});

test ("words function test with a phrase", () => {
    expect(words.reverseWord("The quick brown fox jumps over the lazy dog.")).toEqual("ehT kciuq nworb xof spmuj revo eht yzal .god");
});
