const {Average} = require("./avg");

it ("Average Class Exists", () => {
    expect(typeof(Average)).toBe("function");
});

it ("Average Class creates obj", () => {
    const average = new Average;
    expect(typeof(average)).toBe("object");
});

it ("average obj has function", () => {
    const average = new Average;
    expect(typeof(average.findAvg)).toBe("function");
});


it ("findAvg simple empty array return 0", () => {
    const average = new Average;
    expect(average.findAvg([])).toBe(0);
});


it ("findAvg all same number array", () => {
    const average = new Average;
    expect(average.findAvg([1,1,1])).toBe(1);
});
