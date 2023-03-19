const letter = require("./letter.js");

test ("letter type", () => {
    expect(typeof(letter)).toBe("object");
});

test ("letter.abecedario type", () => {
    expect(typeof(letter.abecedario)).toBe("function");
});

test ("letter.abecedario type", () => {
    expect(letter.abecedario(['a','b','c','d','f'])).toBe('e');
});

test ("letter.abecedario type", () => {
     expect(letter.abecedario(['O','Q','R','S'])).toBe('P');
});