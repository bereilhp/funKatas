const Island = require("./islands.js");
let island = new Island();

test ("Create class Island", () => {
    expect(typeof(Island)).toBe("function");
});

test ("Create object island", () => {
    expect(typeof(island)).toBe("object");
});

