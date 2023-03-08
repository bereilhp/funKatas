const Num = require("./narcissisticNum");
let num = new Num;

test ("Object created", () => {
    expect(typeof(num)).toBe("object");
});

test ("Function created", () => {
    expect(typeof(num.narcissitic)).toBe("function");
});
