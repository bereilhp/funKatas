const Camel = require("./camel.js");
let word = new Camel();

test ("Check Camel Class working properly", () => {
    expect(typeof(Camel)).toBe("function");
});

test ("Check Camel Class creates object word working properly", () => {
    expect(typeof(word)).toBe("object");
});

test ("Check object word function", () => {
    expect(typeof(word.camelCase)).toBe("function");
});

test ("Check function for camel case test 1", () => {
    expect(word.camelCase("the-stealth-warrior")).toBe("TheStealthWarrior");
});



