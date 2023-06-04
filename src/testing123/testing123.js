class LineNumber {
    count(array) {
        if (array.length == 0) {
            return array;
        } else {
            let ans = [];
            for (let i = 0; i < array.length; i++) {
                ans.push(`${i + 1}: ${array[i]}`);
            }
            return ans;
        }
    }
}

module.exports = {
    LineNumber
};