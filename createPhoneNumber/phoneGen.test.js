const phoneGenerator = require('./phoneGen');
test ("Dummy", () => {
    expect(phoneGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
})