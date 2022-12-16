const car = require("./object.js")
test ("Model object car", () => {
    expect(car.model).toBe("500");
})

test ("Model object car", () => {
    expect(car.sayType("500")).toBe("500");
})