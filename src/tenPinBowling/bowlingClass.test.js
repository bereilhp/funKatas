const Bowling = require("./bowlingClass");
let bolos = new Bowling();

test ("All numbers no spare or strike", () => {
    score = "52 45 63 54 62 71 81 72 54 34"
    expect(bolos.bowlingScoreSimple(score)).toEqual(84);
});

test ("All numbers 0", () => {
    score = "00 00 00 00 00 00 00 00 00 00"
    expect(bolos.bowlingScoreSimple(score)).toEqual(0);
});

test ("Neg num", () => {
    score = "-0 00 00 00 00 00 00 00 00 00"
    expect(bolos.bowlingScoreSimple(score)).toEqual(NaN);
});

test ("Letra", () => {
    score = "a0 00 00 00 00 00 00 00 00 00"
    expect(bolos.bowlingScoreSimple(score)).toEqual(NaN);
});

test ("All number 0", () => {
    score = "11 11 11 11 11 11 11 11 11 11"
    expect(bolos.bowlingScoreSimple(score)).toEqual(20);
});

test ("All numbers and one spare", () => {
    score = "6/ 45 63 54 62 71 81 72 54 34"
    expect(bolos.bowlingScoreSpare(score)).toBe(91);
})

test ("All numbers and multiple spares", () => {
    score = "72 54 6/ 6/ 72 72 53 54 63 45"
    expect(bolos.bowlingScoreSpare(score)).toBe(104)
});

test ("Multiple spares and extra end", () => {
    score = "72 54 6/ 6/ 72 72 53 54 63 4/ 2"
    expect(bolos.bowlingScoreSpareWithExtra(score)).toBe(107)
});

test ("Multiple spares and extra end 2", () => {
    score = "72 54 6/ 6/ 72 72 53 54 63 4/ 5"
    expect(bolos.bowlingScoreSpareWithExtra(score)).toBe(110)
});

test ("All numbers one strike", () => {
    score = "X 54 63 62 72 72 53 54 63 42"
    expect(bolos.bowlingScoreStrike(score)).toBe(95)
});

test ("All numbers and multiple strikes", () => {
    score = "X 54 X 62 72 72 X 54 63 42"
    expect(bolos.bowlingScoreStrike(score)).toBe(115)
});

test ("All numbers and multiple strikes and extra strike end", () => {
    score = "X 54 X 62 72 72 X 54 63 X 33"
    expect(bolos.bowlingScoreStrikeWithExtra(score)).toBe(125)
});

test ("All numbers and multiple strikes and extra strike end 2", () => {
    score = "X 54 X 62 72 44 X 54 63 X 44"
    expect(bolos.bowlingScoreStrikeWithExtra(score)).toBe(126)
});

test ("All numbers and multiple strikes and extra strike end 3", () => {
    score = "X 54 X 62 72 44 X 54 63 X 91"
    expect(bolos.bowlingScoreStrikeWithExtra(score)).toBe(128)
});

test ("All numbers and multiple strikes and extra spare end", () => {
    expect(bolos.bowlingScoreStrikeWithExtraSpare("X 54 X 62 72 44 X 54 63 9 10")).toBe(118)
 });

 test ("All numbers and multiple strikes and extra spare and strike end", () => {
    expect(bolos.bowlingScoreStrikeWithExtraSpareAndStrike("X 54 X 62 72 44 X 54 63 9 1X")).toBe(128)
 });

// test ("All numbers and multiple strikes and extra strike end 2", () => {
//     expect(bolos.bowlingScoreStrikeWithExtra("X 54 X 62 72 44 X 54 63 X XX")).toBe(126)
// });
