const Words = require("./wordCounter");
let word = new Words("string")
test ("Example", () => {
    expect("test").toBe("test");
});

beforeEach(() => {
    let word = new Words("string")
    return word;
});

test ("Test typeof class words", () => {
    expect(typeof(Words)).toBe("function");
});

test ("Test class words create a word", () => {
    expect(word).toEqual({"type": "string"});
});






