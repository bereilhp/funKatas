class InvertValues {
    invert(input) {
        if (!input.length) {
            return input;
        } else {
            return input.map((a) => a - (a*2));
        }
    }
}

module.exports = {
    InvertValues
};