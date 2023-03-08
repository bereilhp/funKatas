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

test ("Function test 7", () => {
    expect(num.narcissitic(7)).toBe(true);
});

test ("Function test 122", () => {
    expect(num.narcissitic(122)).toBe(false);
});

test ("Function test 487", () => {
    expect(num.narcissitic(487)).toBe(false);
});


