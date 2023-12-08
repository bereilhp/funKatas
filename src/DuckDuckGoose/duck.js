class Player {
  constructor(name) {
    this.name = name;
  }
}

function duckDuckGoose(players, goose) {
  const letter = players[goose - 1];
  return letter.name;
}

module.exports = { Player, duckDuckGoose };
