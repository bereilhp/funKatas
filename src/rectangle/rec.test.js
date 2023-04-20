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

test ("Area rectangle 2", () => {
    expect(rectangle.area(0,0,4,4)).toBe(16);
});

test ("Perimeter rectangle", () => {
    expect(rectangle.perimeter(0,0,3,4)).toBe(14);
});

test ("Perimeter rectangle 2", () => {
    expect(rectangle.perimeter(0,0,4,4)).toBe(16);
});

test ("Perimeter rectangle 3", () => {
    expect(rectangle.perimeter(0,0,5,5)).toBe(20);
});

test ("Center rectangle", () => {
    expect(rectangle.center(0,0,3,4)).toBe("x = 1.5 & y = 2");
});

test ("Center rectangle 2", () => {
    expect(rectangle.center(0,0,4,4)).toBe("x = 2 & y = 2");
});

test ("Center rectangle 3", () => {
    expect(rectangle.center(1,0,4,4)).toBe("x = 1.5 & y = 2");
});