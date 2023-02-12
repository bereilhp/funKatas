const letter = require("./case")
test ("Example", () => {
    expect("test").toBe("test");
});

test ("Test 1", () => {
    expect(typeof(letter)).toBe("object");
});

test ("Test 2", () => {
    expect(letter.caseCheck(1,"a")).toBe(-1);
});

test ("Test 3", () => {
    expect(letter.caseCheck("b","a")).toBe(1);
});

test ("Test 4", () => {
    expect(letter.caseCheck("A","B")).toBe(1);
});

test ("Test 5", () => {
    expect(letter.caseCheck("a","B")).toBe(0);
});
