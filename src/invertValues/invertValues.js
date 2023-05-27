class InvertValues {
    invert(input) {
        if (!input.length) {
            return input;
        } else {
            return input.map((num) => num - (num*2));
        }
    }
}

module.exports = {
    InvertValues
};