const { dni, dniLetra } = require("./dniCalc.js");
test ("Test Dni Size", () => {
    expect(dni([1,2,3,3,5,6,7,8,"T"])).toBe(9);
});

test ("Test Dni Size More", () => {
    expect(dni([1,2,3,3,5,6,7,8,"T",10])).toBe("The ID should only be 9 characters long");
});

test ("Test Dni with more letters", () => {
    expect(dni([1,2,3,3,5,"R",7,8,"T"])).toBe("The ID should only be numbers and the last a letter");
});

test ("Test Dni with Ñ", () => {
    expect(dni([1,2,3,3,5,6,7,8,"Ñ"])).toBe("ID should not contain this letter");
});

test ("Test Dni with U", () => {
    expect(dni([1,2,3,3,5,6,7,8,"U"])).toBe("ID should not contain this letter");
});

test ("Test Dni with I", () => {
    expect(dni([1,2,3,3,5,6,7,8,"I"])).toBe("ID should not contain this letter");
});

test ("Test Dni with O", () => {
    expect(dni([1,2,3,3,5,6,7,8,"O"])).toBe("ID should not contain this letter");
});