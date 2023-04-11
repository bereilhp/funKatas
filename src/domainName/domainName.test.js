const { domain } = require("./domainName");

test ("typeof domain object", () => {
    expect(typeof(domain)).toBe("object");
});

test ("typeof domainName function", () => {
    expect(typeof(domain.domainName)).toBe("function");
});

test ("domainName function test example", () => {
    expect(domain.domainName("https://example.org:81/foo")).toBe("example");
});

test ("domainName function test github", () => {
    expect(domain.domainName("http://github.com/carbonfive/raygun")).toBe("github");
});

test ("domainName function test cnet", () => {
    expect(domain.domainName("https://www.cnet.com")).toBe("cnet");
});

test ("domainName function test zombie-bites", () => {
    expect(domain.domainName("http://www.zombie-bites.com")).toBe("zombie-bites");
});

test ("domainName function test google", () => {
    expect(domain.domainName("http://google.com")).toBe("google");
});

test ("domainName function test google 2", () => {
    expect(domain.domainName("http://google.co.jp")).toBe("google");
});

test ("domainName function test youtube", () => {
    expect(domain.domainName("https://youtube.com")).toBe("youtube");
});

test ("domainName function test youtube", () => {
    expect(domain.domainName("www.xakep.ru")).toBe("xakep");
});
