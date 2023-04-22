const { meanSqr } = require("./meanSquare");
test ("test meanSqr object", () => {
    expect(typeof(meanSqr)).toBe("object");
});

test ("test meanSqr.meanSqrError function", () => {
    expect(typeof(meanSqr.meanSqrError)).toBe("function");
});