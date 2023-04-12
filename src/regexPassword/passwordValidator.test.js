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

test ("Password.validator contains lowercase letter", () => {
    expect(password.validator("hola123")).toBe(true);
});

test ("Password.validator contains uppercase letter", () => {
    expect(password.validator("HOLA123")).toBe(true);
});