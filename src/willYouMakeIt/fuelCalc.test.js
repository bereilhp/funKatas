const fuel = require('./fuelCalc.js');

test("Check if you can make it with fuel", () => {
    expect(fuel(50,25,2)).toBe(true);
})

test("Check if you can't make it with fuel", () => {
    expect(fuel(50,25,1)).toBe(false);
})

test("Check if you have much more fuel and can make it", () => {
    expect(fuel(50,25,4)).toBe(true);
})