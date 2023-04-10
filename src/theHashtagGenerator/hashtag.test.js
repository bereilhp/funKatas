const { hashtag } = require("./hashtag");

test ("Tyepof Hashtag", () => {
    expect(typeof(hashtag)).toBe("object");
});

test ("Tyepof Hashtag function", () => {
    expect(typeof(hashtag.hashtagGenerator)).toBe("function");
});