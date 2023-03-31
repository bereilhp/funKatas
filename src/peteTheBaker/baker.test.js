const bake = require("./baker.js");

test ("Object bake exists", () => {
    expect(typeof(bake)).toBe("object");
});

test ("Object bake has function cake", () => {
    expect(typeof(bake.cake)).toBe("function");
});