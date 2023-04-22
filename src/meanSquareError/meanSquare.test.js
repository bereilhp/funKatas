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

test ("meanSqr.meanSqrError 2", () => {
    expect(meanSqr.meanSqrError([10, 20, 10, 2], [10, 25, 5, -2])).toBe(16.5);
});

test ("meanSqr.meanSqrError 3", () => {
    expect(meanSqr.meanSqrError([-1, 0], [0, -1])).toBe(1);
});