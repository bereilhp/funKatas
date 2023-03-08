const Num = require("./narcissisticNum");
let num = new Num;

test ("Object created", () => {
    expect(typeof(num)).toBe("object");
});

test ("Function created", () => {
    expect(typeof(num.narcissitic)).toBe("function");
});

test ("Function test", () => {
    expect(num.narcissitic(153)).toBe(153);
});
