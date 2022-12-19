const fib = require("./fibonacci");
test ("Example", () => {
    expect("test").toBe("test");
});

test ("Test if function exists", () => {
    expect(typeof(fib.Nnumber)).toBe("function");
});

test ("Return 1 fib", () => {
    expect(fib.Nnumber(4)).toBe(2);
});
