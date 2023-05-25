class Sequence {
    sum(begin, end, step) {
        if (begin > end) {
            return 0;
        } else if (begin === end) {
            return begin;
        } else {
            let ans = [];
            for (let i = begin; i <= end; i += step) {
                ans.push(i);
            }
            return ans.reduce((a, b) => a + b, 0);
        }
    }
}

module.exports = {
    Sequence
};