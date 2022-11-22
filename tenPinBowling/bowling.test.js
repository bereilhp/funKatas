const bowlingScoreSimple = require("./bowling");

test ("Dummy Test", () => {
    expect(bowlingScoreSimple("52 45 63 54 62 71 81 72 54 34")).toEqual(84);
});