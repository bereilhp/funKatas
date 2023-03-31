const bake = require("./baker.js");

test ("Object Bake exists", () => {
    expect(typeof(bake)).toBe("object");
});