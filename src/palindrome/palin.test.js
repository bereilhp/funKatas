const {palindrome} = require("./palin");

describe ("Object and Function exists", () => {
    const p = new palindrome();

    it("Object p exists", ()=> {
        expect(typeof(p)).toBe("object");
    });

});
