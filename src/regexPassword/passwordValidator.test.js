const {password} = require("./passwordValidator.js");

test ("Test typeof password", () => {
    expect(typeof(password)).toBe("object");
});