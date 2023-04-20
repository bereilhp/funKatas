const {rectangle} = require("./rec");

test ("Typeof rectangle", () => {
    expect(typeof(rectangle)).toBe("object");
});

test ("Typeof rectangle", () => {
    expect(typeof(rectangle.buildRec)).toBe("function");
});