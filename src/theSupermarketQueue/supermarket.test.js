const {queue} = require("./supermarket");

test ("object queue exists", () => {
    expect(typeof(queue)).toBe("object");
});

test ("function queueTime exists", () => {
    expect(typeof(queue.queueTime)).toBe("function");
});