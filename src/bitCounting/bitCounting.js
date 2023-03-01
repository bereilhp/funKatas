class Num {
    bitCounting(number){
        let numToBinary = number.toString(2);
        let binaryMatch = numToBinary.match(/1/g);
        let matchLength = binaryMatch.length;
        return matchLength;
    }
}

module.exports = Num;