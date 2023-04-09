const { oddy, eveny, detector } = require("./outlier.js");
test ("Oddy", () => {
    expect(oddy([2,3,4])).toBe(3);
});

test ("Eveny", () => {
    expect(eveny([1,2,3])).toBe(2);
});

test ("Oddy README", () => {
    expect(oddy([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
});

test ("Eveny README", () => {
    expect(eveny([160, 3, 1719, 19, 11, 13, -21])).toBe(160);
});

test ("Final detect function even", () => {
    expect(detector([160, 3, 1719, 19, 11, 13, -21])).toEqual(160);
});

test ("Final detect function odd", () => {
    expect(detector([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
});
