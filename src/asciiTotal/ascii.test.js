const Ascii = require("./ascii.js")
let char = new Ascii();

test ("Test class ascii", () => {
    expect(typeof(Ascii)).toBe("function");
});

test ("Test object ascii", () => {
    expect(typeof(char)).toBe("object");
});

test ("Test object ascii function uniTotal", () => {
    expect(typeof(char.uniTotal)).toBe("function");
});

test ("Test object ascii function uniTotal value", () => {
    expect(char.uniTotal("a")).toBe("1");
});


