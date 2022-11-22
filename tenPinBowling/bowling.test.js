const { bowlingScoreSimple, bowlingScoreSpare } = require("./bowling");

test ("All numbers no spare or strike", () => {
    expect(bowlingScoreSimple("52 45 63 54 62 71 81 72 54 34")).toEqual(84);
});

test ("All numbers and spares", () => {
    expect(bowlingScoreSpare("5/ 45 63 54 62 71 81 72 54 34")).toEqual(91);
})