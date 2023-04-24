const {queue} = require("./supermarket");

test ("object queue exists", () => {
    expect(typeof(queue)).toBe("object");
});

test ("function queueTime exists", () => {
    expect(typeof(queue.queueTime)).toBe("function");
});

test ("function queueTime test #1", () => {
    expect(queue.queueTime([5,3,4], 1)).toBe(12);
});