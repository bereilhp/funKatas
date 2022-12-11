const { tennisScore, tennisScoreGames} = require("./tennis")

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

test ("Score = Deuce", () => {
    expect(tennisScore("Deuce")).toBe(6);
});

test ("Score 40 - 30", () => {
    expect(tennisScore("40-30")).toBe(5);
});

test ("Advatnage p1", () => {
    expect(tennisScore("Advantage p1")).toBe(7);
});

test ("Advatnage p1 refactor", () => {
    expect(tennisScore("Ad-40")).toBe(7);
});


test ("Advatnage p2", () => {
    expect(tennisScore("Advantage p2")).toBe(7);
});

test ("Advatnage p2 refactor", () => {
    expect(tennisScore("40-Ad")).toBe(7);
});

test ("Game p1", () => {
    expect(tennisScore("Game-30")).toBe("Game Player 1. He won by 2 points");
});

test ("Game p2", () => {
    expect(tennisScore("15-Game")).toBe("Game Player 2. He won by 3 points");
});

test ("Game Score p1", () => {
    expect(tennisScoreGames("4-2")).toBe("Player p1 is winning by 2 games and the score is 4-2");
});

test ("Game Score p2", () => {
    expect(tennisScoreGames("2-4")).toBe("Player p2 is winning by 2 games and the score is 2-4");
});

test ("Game Score tied", () => {
    expect(tennisScoreGames("4-4")).toBe("They are tied in games and the score is 4-4");
});