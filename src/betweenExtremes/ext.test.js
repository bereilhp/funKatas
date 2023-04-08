const ext  = require("./ext.js");

test ("Typeof object", () => {
    expect(typeof(ext)).toBe("object");
});

test ("Typeof object function", () => {
    expect(typeof(ext.diff)).toBe("function");
});

test ("Function test", () => {
    expect(ext.diff([1,2,3,4,5])).toBe(4);
});

test ("Function test 2", () => {
    expect(ext.diff([23, 3, 19, 21, 16])).toBe(20);
});

test ("Function test 3", () => {
    expect(ext.diff([1, 434, 555, 34, 112])).toBe(554);
});

test ("Function test 4", () => {
    expect(ext.diff([1,2])).toBe(1);
});

test ("Function test 5", () => {
    expect(ext.diff([0,2])).toBe(2);
});

test ("Function test 6", () => {
    expect(ext.diff([21, 34, 54, 43, 26, 12])).toBe(42);
});

test ("Function test 6", () => {
    expect(ext.diff([-1, -41, -77, -100])).toBe(99);
});


