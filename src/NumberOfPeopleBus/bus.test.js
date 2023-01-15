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

test("Object function #3", () => { 
    expect(bus.numberOfPeople([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]],21)).toBe(21)
});

test("Object function #4", () => { 
    expect(bus.numberOfPeople([[0,0]],0)).toBe(0)
});