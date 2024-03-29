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

    it("Input is palindrome false", ()=> {
        expect(p.isPalindrome("hola")).toBe(false);
    });

    it("Input is palindrome true", ()=> {
        expect(p.isPalindrome("reconocer")).toBe(true);
    });

    it("Input is palindrome true 2", ()=> {
        expect(p.isPalindrome("mom")).toBe(true);
    });

    it("Input is palindrome true 3", ()=> {
        expect(p.isPalindrome("dad")).toBe(true);
    });

    it("Input is palindrome false 2", ()=> {
        expect(p.isPalindrome("ad")).toBe(false);
    });

    it("Input is palindrome true 4", ()=> {
        expect(p.isPalindrome("a")).toBe(true);
    });

});
