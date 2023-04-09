const car = require("./class");

let fiat = new car("Fiat", 2014);
test ("Testing a car", () => {
    expect(fiat).toEqual({"name": "Fiat", "year": 2014}
    );
});