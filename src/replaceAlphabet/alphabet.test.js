const Alphabet = require("./alphabet.js");
let alpha = new Alphabet;

test ("Create class Alphabet", () => {
    expect(typeof(Alphabet)).toBe("function");
});

test ("Create object alpha", () => {
    expect(typeof(alpha)).toBe("object");
});

test ("Test function alphabetPosition", () => {
    expect(alpha.alphabetPosition("hola")).toBe("8 15 12 1");
});

test ("Test function alphabetPosition 2", () => {
    expect(alpha.alphabetPosition("The sunset sets at twelve o' clock.")).toBe("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
});


