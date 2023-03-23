const conversor = {
    rgb : function(first, second, third){
        let num1 = first;
        let num2 = second;
        let num3 = third;

        if(first < 9){
            num1 = "0" + first;
        };
        
        if(second < 9){
            num2 = "0" + second;
        };

        if(third < 9){
            num3 = "0" + third;
        };

        let firstHex = num1.toString(16);
        let secondHex = num2.toString(16);
        let thirdHex = num3.toString(16);
        let ans = firstHex + secondHex + thirdHex
        let ansUpper = ans.toUpperCase()
        return ansUpper
    }
}

module.exports = conversor;