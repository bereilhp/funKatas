const Island = require("./islands.js");
let island = new Island();

test ("Create class Island", () => {
    expect(typeof(Island)).toBe("function");
});

test ("Create object island", () => {
    expect(typeof(island)).toBe("object");
});

test ("Create object function analyzer", () => {
    expect(typeof(island.analyzer)).toBe("function");
});

test ("Testing function Analyzer", () => {
    let islands = [0,0,0,0,0,0,0,0,0,0];          
    expect(island.analyzer(islands)).toBe("~~~~~~~~~~");
});

test ("Testing function Analyzer", () => {
    let islands = [0,0,1,0,1,0,1,0,0,0];          
    expect(island.analyzer(islands)).toBe("~~X~X~X~~~");
});



