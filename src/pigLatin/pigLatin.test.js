const pigLatin = require("./pigLatin");

test ("Typeof pigLatin", () => {
    expect(typeof(pigLatin)).toBe("object");
});

test ("Typeof pigLatin.pigIt", () => {
    expect(typeof(pigLatin.pigIt)).toBe("function");
});

test ("Typeof pigLatin.pigIt", () => {
    expect(pigLatin.pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
});