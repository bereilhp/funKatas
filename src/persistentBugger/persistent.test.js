const Num = require("./persistent");
const persistentGlob = require("./persistentFuncGlob")
let num = new Num;

test ("Object created", () => {
    expect(typeof(num)).toBe("object");
});

test ("Function created", () => {
    expect(typeof(num.persistent)).toBe("function");
});

test ("Object Function test 10", () => {
    expect(num.persistent(10)).toBe(1);
});

test ("Object Function test 4", () => {
    expect(num.persistent(4)).toBe(0);
});

test ("Object Function test 12", () => {
    expect(num.persistent(12)).toBe(1);
});

test ("Object Function test 39", () => {
    expect(num.persistent(39)).toBe(3);
});

test ("Object Function test 999", () => {
    expect(num.persistent(999)).toBe(4);
});

test ("Function Glob test 39", () => {
    expect(persistentGlob(39)).toBe(3);
});

test ("Function Glob test 10", () => {
    expect(persistentGlob(999)).toBe(4);
});

test ("Function GLob test 25", () => {
    expect(persistentGlob(25)).toBe(2);
});

test ("Function GLob test 999", () => {
    expect(persistentGlob(999)).toBe(4);
});

test ("Function GLob test 4", () => {
    expect(persistentGlob(4)).toBe(0);
});