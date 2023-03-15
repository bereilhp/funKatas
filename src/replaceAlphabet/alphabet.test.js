const Alphabet = require("./alphabet.js");
let alpha = new Alphabet;

test ("Create class Alphabet", () => {
    expect(typeof(Alphabet)).toBe("function");
});

test ("Create object alpha", () => {
    expect(typeof(alpha)).toBe("object");
});