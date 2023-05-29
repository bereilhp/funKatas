const {find} = require("./index");
test ("Simple test", () => {
    expect(find([1,2,3], 2)).toBe(1);
});
