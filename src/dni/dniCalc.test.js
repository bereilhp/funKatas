const { dni, dniSuma, dniLetra, nie, dniCharsToArray } = require("./dniCalc.js");
test ("Test Dni Size", () => {
    expect(dni("12345678T")).toBe(9);
});

test ("Test Dni Size More", () => {
    expect(dni("12335678T10")).toBe("The ID should only be 9 characters long");
});

test ("Test Dni with more letters", () => {
    expect(dni("12335R78T")).toBe("The ID should only be numbers and the last a letter");
});

test ("Test Dni with more letters 2", () => {
    expect(dni("12E35R78T")).toBe("The ID should only be numbers and the last a letter");
});

test ("Test Dni with Ñ", () => {
    expect(dni("12335678Ñ")).toBe("ID should not contain this letter");
});

test ("Test Dni with U", () => {
    expect(dni("12335678U")).toBe("ID should not contain this letter");
});

test ("Test Dni with I", () => {
    expect(dni("12335678I")).toBe("ID should not contain this letter");
});

test ("Test Dni with O", () => {
    expect(dni("12335678O")).toBe("ID should not contain this letter");
});

test ("Test Sum Dni", () => {
    expect(dniSuma("12345678O")).toBe(36);
});

test ("Test Valid Letter ID", () => {
    expect(dniLetra("12345678J")).toBe("ID invalid");
});

test ("Test Letter Nie", () => {
    expect(nie("12345678J")).toBe("Y");
});

test ("Test DNI chars", () => {
    expect(dniCharsToArray("00000000T")).toEqual([0, 0, 0, 0, 0, 0, 0, 0, "T"]);
});