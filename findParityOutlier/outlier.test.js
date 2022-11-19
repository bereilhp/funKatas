const { oddy, eveny } = require("./outlier.js");
test ("Oddy", () => {
    expect(oddy([2,3,4])).toBe(3);
})

test ("Eveny", () => {
    expect(eveny([1,2,3])).toBe(2);
})