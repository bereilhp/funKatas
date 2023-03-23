const conversor = {
    rgb : function(first, second, third){
        let firstHex = first.toString(16);
        let secondHex = second.toString(16);
        let thirdHex = third.toString(16);
        let ans = firstHex + secondHex + thirdHex
        let ansUpper = ans.toUpperCase()
        return ansUpper
    }
}

module.exports = conversor;