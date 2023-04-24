const {queue} = require("./supermarket");

test ("object queue exists", () => {
    expect(typeof(queue)).toBe("object");
});