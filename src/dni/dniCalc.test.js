const dni = require("./dniCalc.js");
test ("Test Dni Size", () => {
    expect(dni([1,2,3,4,5,6,7,8,9])).toBe(9);
})