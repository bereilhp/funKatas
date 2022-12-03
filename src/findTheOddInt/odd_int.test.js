const findOddy = require("./odd_int"); 
test ("Testing with simple example", () => {
    expect(findOddy([1,1,2,3,3,3,3])).toEqual(2);
});

test ("Testing with readme examples", () => {
    expect(findOddy([0,1,0,1,0])).toBe(0);
});


