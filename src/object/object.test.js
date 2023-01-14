const car = require("./object.js");
const carColor = require("./object.js").color;

test ("Model object car", () => {
    expect(car.model).toBe("500");
})

test ("Object car color", () => {
    expect(carColor).toBe("white");
})

test ("Model object car", () => {
    expect(car.sayModel()).toBe("500");
})

test ("Type object car", () => {
    expect(car.sayType()).toBe("Fiat");
})


