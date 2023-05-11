const {palindrome} = require("./palin");

describe ("Object and Function exists", () => {
    const p = new palindrome();

    it("Object p exists", ()=> {
        expect(typeof(p)).toBe("object");
    });

    it("Function isPalindrome exists", ()=> {
        expect(typeof(p.isPalindrome)).toBe("function");
    });

});

describe ("Function isPalindrome test", () => {
    const p = new palindrome();

    it("Input is not a word", ()=> {
        expect(p.isPalindrome(10)).toBe("No es una palabra");
    });

    it("Input is palindrome", ()=> {
        expect(p.isPalindrome("hola")).toBe(false);
    });


});
