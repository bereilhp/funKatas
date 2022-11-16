const str = require("./disemvowel")

test ("Remove trolls test", () => {
    expect(str("hey")).toBe("hy");
})

test ("Remove trolls sentence test", () => {
    expect(str("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!")
});