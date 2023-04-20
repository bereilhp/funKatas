const {rectangle} = require("./rec");

test ("Typeof rectangle", () => {
    expect(typeof(rectangle)).toBe("object");
});

test ("Typeof rectangle buildRec Func", () => {
    expect(typeof(rectangle.buildRec)).toBe("function");
});

test ("BuildRec not a rectangle", () => {
    expect(rectangle.buildRec(0,0,0,3)).toBe("Not a rectangle");
});

test ("BuildRec not a rectangle", () => {
    expect(rectangle.buildRec(0,0,3,0)).toBe("Not a rectangle");
});

test ("BuildRec a rectangle", () => {
    expect(rectangle.buildRec(0,0,3,4)).toBe("A rectangle");
});

test ("Area rectangle", () => {
    expect(rectangle.area(0,0,3,4)).toBe(12);
});