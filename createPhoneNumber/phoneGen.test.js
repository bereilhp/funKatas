const phoneGenerator = require('./phoneGen');
test ("Dummy", () => {
    expect(phoneGenerator([])).toEqual([]);
})