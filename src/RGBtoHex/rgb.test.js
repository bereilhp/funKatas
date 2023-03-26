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


test ("typeof conversor.rgb 255 < ", () => {
    expect(conversor.rgb(256,255,47)).toBe("FFFF2F");
});

test ("typeof conversor.rgb 255 < ", () => {
    expect(conversor.rgb(44,11,200)).toBe("2C0BC8");
});

test ("typeof conversor.rgb 255 < ", () => {
    expect(conversor.rgb(300,12,400)).toBe("FF0CFF");
});


test ("typeof conversor.rgb < 0 ", () => {
    expect(conversor.rgb(1,1,-1)).toBe("010100");
});
