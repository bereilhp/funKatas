const pigLatin = require("./pigLatin");

test ("Typeof pigLatin", () => {
    expect(typeof(pigLatin)).toBe("object");
});

test ("Typeof pigLatin.pigIt", () => {
    expect(typeof(pigLatin.pigIt)).toBe("function");
});