const { bowlingScoreSimple, bowlingScoreSpare, bowlingScoreSpareWithExtra } = require("./bowling");

test ("All numbers no spare or strike", () => {
    expect(bowlingScoreSimple("52 45 63 54 62 71 81 72 54 34")).toEqual(84);
});

test ("All number 0", () => {
    expect(bowlingScoreSimple("00 00 00 00 00 00 00 00 00 00")).toEqual(0);
});

test ("All numbers and spares", () => {
    expect(bowlingScoreSpare("6/ 45 63 54 62 71 81 72 54 34")).toBe(91);
})

test ("Multiple spares", () => {
    expect(bowlingScoreSpare("72 54 6/ 6/ 72 72 53 54 63 45")).toBe(104)
});

test ("Multiple spares and extra end", () => {
    expect(bowlingScoreSpareWithExtra("72 54 6/ 6/ 72 72 53 54 63 4/ 2")).toBe(107)
});