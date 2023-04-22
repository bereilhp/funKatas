const { meanSqr } = require("./meanSquare");
test ("test meanSqr object", () => {
    expect(typeof(meanSqr)).toBe("object");
});

test ("test meanSqr.meanSqrError function", () => {
    expect(typeof(meanSqr.meanSqrError)).toBe("function");
});

test ("meanSqr.meanSqrError 1", () => {
    expect(meanSqr.meanSqrError([1,2,3], [4,5,6])).toBe(9);
});