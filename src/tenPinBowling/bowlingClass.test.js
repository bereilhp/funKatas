const Bowling = require("./bowlingClass");
let bolos = new Bowling();

test ("All numbers no spare or strike", () => {
    expect(bolos.bowlingScoreSimple("52 45 63 54 62 71 81 72 54 34")).toEqual(84);
});

test ("All number 0", () => {
    expect(bolos.bowlingScoreSimple("00 00 00 00 00 00 00 00 00 00")).toEqual(0);
});

test ("All number 0", () => {
    expect(bolos.bowlingScoreSimple("11 11 11 11 11 11 11 11 11 11")).toEqual(20);
});

test ("All numbers and one spare", () => {
    expect(bolos.bowlingScoreSpare("6/ 45 63 54 62 71 81 72 54 34")).toBe(91);
})

test ("All numbers and multiple spares", () => {
    expect(bolos.bowlingScoreSpare("72 54 6/ 6/ 72 72 53 54 63 45")).toBe(104)
});

test ("Multiple spares and extra end", () => {
    expect(bolos.bowlingScoreSpareWithExtra("72 54 6/ 6/ 72 72 53 54 63 4/ 2")).toBe(107)
});

test ("All numbers one strike", () => {
    expect(bolos.bowlingScoreStrike("X 54 63 62 72 72 53 54 63 42")).toBe(95)
});

test ("All numbers and multiple strikes", () => {
    expect(bolos.bowlingScoreStrike("X 54 X 62 72 72 X 54 63 42")).toBe(115)
});

test ("All numbers and multiple strikes and extra strike end", () => {
    expect(bolos.bowlingScoreStrikeWithExtra("X 54 X 62 72 72 X 54 63 X 33")).toBe(125)
});

test ("All numbers and multiple strikes and extra strike end 2", () => {
    expect(bolos.bowlingScoreStrikeWithExtra("X 54 X 62 72 44 X 54 63 X 44")).toBe(126)
});

test ("All numbers and multiple strikes and extra strike end 3", () => {
    expect(bolos.bowlingScoreStrikeWithExtra("X 54 X 62 72 44 X 54 63 X 91")).toBe(128)
});

// test ("All numbers and multiple strikes and extra strike end 2", () => {
//     expect(bolos.bowlingScoreStrikeWithExtra("X 54 X 62 72 44 X 54 63 9 1X")).toBe(126)
// });

// test ("All numbers and multiple strikes and extra strike end 2", () => {
//     expect(bolos.bowlingScoreStrikeWithExtra("X 54 X 62 72 44 X 54 63 X XX")).toBe(126)
// });
