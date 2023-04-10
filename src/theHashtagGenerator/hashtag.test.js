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

test ("Testing function long sentence", () => {
    expect(hashtag.hashtagGenerator(" Hello there thanks for trying my Kata")).toBe("#HelloThereThanksForTryingMyKata");
});

test ("Testing function empty", () => {
    expect(hashtag.hashtagGenerator("")).toBe(false);
});

test ("Testing function still empty", () => {
    expect(hashtag.hashtagGenerator(" ")).toBe(false);
});


