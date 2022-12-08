const { players, tennisScore } = require("./tennis")
test ("Test players 0-0 (love-love)", () => {
    expect(players(0,0)).toBe("love-love");
});

test ("Test players 1-0 (love-love)", () => {
    expect(players(1,0)).toBe("15-love");
});

test ("Test players 2-0 (30-love)", () => {
    expect(players(2,0)).toBe("30-love");
});

test ("Test players 3-0 (40-love)", () => {
    expect(players(3,0)).toBe("40-love");
});

test ("Test players 4-0 (Gmae player 1)", () => {
    expect(players(4,0)).toBe("Game p1");
});

test ("Score 15 - love", () => {
    expect(tennisScore("15-love")).toBe(1);
});

test ("Score 15 - all", () => {
    expect(tennisScore("15-15")).toBe(2);
});

test ("Score 30 - 15", () => {
    expect(tennisScore("30-15")).toBe(3);
});

test ("Score 40 - 15", () => {
    expect(tennisScore("40-15")).toBe(4);
});

test ("Score 15 - 40", () => {
    expect(tennisScore("40-15")).toBe(4);
});

test ("Score 15 - all", () => {
    expect(tennisScore("15-all")).toBe(2);
});

test ("Score 30 - all", () => {
    expect(tennisScore("30-all")).toBe(4);
});
