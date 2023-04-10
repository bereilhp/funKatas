const { hashtag } = require("./hashtag");

test ("Tyepof Hashtag", () => {
    expect(typeof(hashtag)).toBe("object");
});

test ("Tyepof Hashtag function", () => {
    expect(typeof(hashtag.hashtagGenerator)).toBe("function");
});

test ("Testing function simple hello", () => {
    expect(hashtag.hashtagGenerator("hello")).toBe("#hello");
});

test ("Testing function sentence", () => {
    expect(hashtag.hashtagGenerator("hello world")).toBe("#helloWorld");
});
