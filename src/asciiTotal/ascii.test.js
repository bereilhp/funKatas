const Ascii = require("./ascii.js")
let char = new Ascii;

test ("Test class ascii", () => {
    expect(typeof(Ascii)).toBe("function");
});

test ("Test object ascii", () => {
    expect(typeof(char)).toBe("object");
});

