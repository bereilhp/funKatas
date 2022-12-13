const add = require("./adders.js")

test("Function exist", () => {
    expect(typeof(add)).toBe("function"); 
    //create test that test if function exist see it fail, then create function see it pass 
}); 

test("Test #1 - add two numbers",() => {
    expect(add(1,2)).toBe(3);
});
