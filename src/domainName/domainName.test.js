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