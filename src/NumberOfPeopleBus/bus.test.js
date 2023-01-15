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

test("Object function #1", () => { 
    expect(bus.numberOfPeople([[10,0],[3,5],[5,8]],5)).toBe(5)
});

test("Object function #2", () => { 
    expect(bus.numberOfPeople([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]],17)).toBe(17)
});