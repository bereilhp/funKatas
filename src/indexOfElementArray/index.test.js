const {find} = require("./index");
test ("Simple test", () => {
    expect(find([1,2,3], 2)).toBe(1);
});

test ("Simple test 2", () => {
    expect(find([1,2,3], 4)).toBe("Not found");
});
