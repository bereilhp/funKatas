const {password} = require("./passwordValidator.js");

test ("Test typeof password", () => {
    expect(typeof(password)).toBe("object");
});

test ("Test typeof password.validator", () => {
    expect(typeof(password.validator)).toBe("function");
});

test ("Password.validator contains 6 letters", () => {
    expect(password.validator("123456")).toBe(true);
});