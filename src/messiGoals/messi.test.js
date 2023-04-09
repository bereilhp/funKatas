const goals = require("./messi.js");

test ("Check if goals are added correctly", () => {
    expect(goals()).toBe(58);
});

