const conversor = require("./rgb.js");

test ("typeof conversor", () => {
    expect(typeof(conversor)).toBe("object");
});

test ("typeof conversor.rgb", () => {
    expect(typeof(conversor.rgb)).toBe("function");
});

test ("typeof conversor.rgb FFFFFF", () => {
    expect(conversor.rgb(255,255,255)).toBe("FFFFFF");
});

test ("typeof conversor.rgb 000000", () => {
    expect(conversor.rgb(0,0,0)).toBe("000000");
});

test ("typeof conversor.rgb 9400D3", () => {
    expect(conversor.rgb(148,0,211)).toBe("9400D3");
});

test ("typeof conversor.rgb ADFF2F", () => {
    expect(conversor.rgb(173,255,47)).toBe("ADFF2F");
});
