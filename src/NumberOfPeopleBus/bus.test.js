const bus = require("./bus")
test ("Example", () => {
    expect("test").toBe("test");
});

test("Prove that object exists", () => { 
    expect(typeof(bus)).toBe("object")
});

test("Prove that object function exists", () => { 
    expect(typeof(bus.numberOfPeople)).toBe("function")
});