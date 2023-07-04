const car = require("./object.js").car;
const carColor = require("./object.js").car.color;
const bike = require("./object").bike;

test ("Model object car", () => {
    expect(car.model).toBe("500");
});

test ("Object car color", () => {
    expect(carColor).toBe("white");
});

test ("Model object car", () => {
    expect(car.sayModel()).toBe("500");
});

test ("Type object car", () => {
    expect(car.sayType()).toBe("Fiat");
});

test ("Type bike", () => {
    expect(typeof(bike)).toBe("object");
});