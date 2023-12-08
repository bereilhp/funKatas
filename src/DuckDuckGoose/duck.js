class Player {
  constructor(name) {
    this.name = name;
  }
}

function duckDuckGoose(players, goose) {
  if (goose > players.length) {
    let newGoose = goose - players.length;
    const letter = players[newGoose - 1];
    return letter.name;
  } else {
    const letter = players[goose - 1];
    return letter.name;
  }
}

module.exports = { Player, duckDuckGoose };
