const letter = {
    abecedario : function (compare) {
        let abc = "abcdefghijklmnopqrstuvwxyz"
        let splitABC = abc.split("");
        let splitSize = splitABC.slice(0, (compare.length + 1))
        let ans = splitSize.filter(x => !compare.includes(x));
        return ans.join("");
    }
}

module.exports = letter;
