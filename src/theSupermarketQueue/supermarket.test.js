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

test ("function queueTime test #2", () => {
    expect(queue.queueTime([10,2,3,3], 2)).toBe(10);
});

test ("function queueTime test #3", () => {
    expect(queue.queueTime([2,3,10], 2)).toBe(12);
});

test ("function queueTime test #4", () => {
    expect(queue.queueTime([], 1)).toBe(0);
});

test ("function queueTime test #5", () => {
    expect(queue.queueTime([1,2,3,4], 1)).toBe(10);
});

test ("function queueTime test #6", () => {
    expect(queue.queueTime([2,2,3,3,4,4], 2)).toBe(9);
});

test ("function queueTime test #7", () => {
    expect(queue.queueTime([1,2,3,4,5], 100)).toBe(5);
});

test ("function queueTime test #8", () => {
    expect(queue.queueTime([1,2,3,4,5,6,7,8,9], 2)).toBe(25);
});

