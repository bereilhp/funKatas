const {password} = require("./passwordValidator.js");

test ("Test typeof password", () => {
    expect(typeof(password)).toBe("object");
});

test ("Test typeof password.validator", () => {
    expect(typeof(password.validator)).toBe("function");
});