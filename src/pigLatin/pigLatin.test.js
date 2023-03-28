const pigLatin = require("./pigLatin");

test ("Typeof pigLatin", () => {
    expect(typeof(pigLatin)).toBe("object");
});

test ("Typeof pigLatin.pigIt", () => {
    expect(typeof(pigLatin.pigIt)).toBe("function");
});

test ("Test pigLatin.pigIt", () => {
    expect(pigLatin.pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
});

test ("Test pigLatin.pigIt", () => {
    expect(pigLatin.pigIt("Hello world !")).toBe("elloHay orldway !");
});

test ("Test pigLatin.pigIt", () => {
    expect(pigLatin.pigIt("Hello world ?")).toBe("elloHay orldway ?");
});