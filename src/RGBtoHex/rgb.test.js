const conversor = require("./rgb.js");

test ("typeof conversor", () => {
    expect(typeof(conversor)).toBe("object");
});

test ("typeof conversor.rgb", () => {
    expect(typeof(conversor.rgb)).toBe("function");
});

test ("typeof conversor.rgb", () => {
    expect(conversor.rgb(255,255,255)).toBe("FFFFFF");
});

test ("typeof conversor.rgb", () => {
    expect(conversor.rgb(0,0,0)).toBe("000000");
});


