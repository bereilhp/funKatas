const likes = require("./like");
test ("Dummy", () => {
    expect(likes("Peter")).toBe("Peter likes this");
})