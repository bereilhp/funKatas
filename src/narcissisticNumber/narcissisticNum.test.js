const Num = require("./narcissisticNum");
let num = new Num;

test ("Object created", () => {
    expect(typeof(num)).toBe("object");
});

test ("Function created", () => {
    expect(typeof(num.narcissitic)).toBe("function");
});

test ("Function test 153", () => {
    expect(num.narcissitic(153)).toBe(true);
});

test ("Function test 1652", () => {
    expect(num.narcissitic(1652)).toBe(false);
});
