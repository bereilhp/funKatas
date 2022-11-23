const likes = require("./like");
test ("No one likes it", () => {
    expect(likes([])).toBe("no one likes this");
})

test ("Peter likes it", () => {
    expect(likes(["Peter"])).toBe("Peter likes this");
})

test ("Peter and Mike like it", () => {
    expect(likes(["Peter", "Mike"])).toEqual("Peter and Mike likes this");
})