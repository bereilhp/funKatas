const {Average} = require("./avg");

it ("Average Class Exists", () => {
    expect(typeof(Average)).toBe("function");
});

it ("Average Class creates obj", () => {
    const average = new Average;
    expect(typeof(average)).toBe("object");
});
