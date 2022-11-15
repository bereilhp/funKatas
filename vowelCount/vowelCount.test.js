const vowelCounter = require("./vowelCount")

test ("hello how are you vowel count", () => {
    expect(vowelCounter("hello how are you")).toBe(7);
})

test ("vowels", () => {
    expect(vowelCounter("aeiou")).toBe(5);
})