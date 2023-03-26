const conversor = {
    rgb: function (first, second, third) {
        let num1 = first;
        let num2 = second;
        let num3 = third;

        if (first < 0) {
            num1 = 0
        } else if (first < 9) {
            num1 = "0" + first;
        } else if (first > 255) {
            num1 = 255;
        }

        if (second < 0) {
            num2 = 0
        } else if (second < 9) {
            num2 = "0" + second;
        } else if (second > 255) {
            num2 = 255;
        }

        if (third < 0) {
            num3 = "00"
        } else if (third < 9) {
            num3 = "0" + third;
        } else if (third > 255) {
            num3 = 255;
        }

        let firstHex = num1.toString(16);
        if (9 < parseInt(firstHex, 16) && parseInt(firstHex, 16) < 16) {
            firstHex = "0" + firstHex;
        }

        let secondHex = num2.toString(16);
        if (9 < parseInt(secondHex, 16) && parseInt(secondHex, 16) < 16) {
            secondHex = "0" + secondHex;
        }

        let thirdHex = num3.toString(16);
        if (9 < parseInt(thirdHex, 16) && parseInt(thirdHex, 16) < 16) {
            thirdHex = "0" + thirdHex;
        }

        let ans = firstHex + secondHex + thirdHex;
        let ansUpper = ans.toUpperCase();
        return ansUpper;
    }
}

module.exports = conversor;