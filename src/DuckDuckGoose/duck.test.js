const { duckDuckGoose } = require("./duck");
const { Player } = require("./duck");

const player = new Player("Juan");

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

describe("Test block", () => {
  it("Check type duckDuckGoose", () => {
    expect(typeof duckDuckGoose).toBe("function");
  });

  it("Check type player", () => {
    expect(typeof player).toBe("object");
  });

  it("player test", () => {
    expect(player).toEqual({ name: "Juan" });
  });

  it("Test #1", () => {
    expect(duckDuckGoose(players, 1)).toBe("a");
  });

  it("Test #2", () => {
    expect(duckDuckGoose(players, 10)).toBe("z");
  });

  it("Test #3", () => {
    expect(duckDuckGoose(players, 20)).toBe("z");
  });

  it("Test #4", () => {
    expect(duckDuckGoose(players, 18)).toBe("g");
  });
});
