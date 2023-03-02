class Num {
    orderInv(number){
        let stringNumberedInversed =  number.toString().split("").sort((a, b) => a - b).reverse().join("");
        let ansNum = Number(stringNumberedInversed);
        return ansNum;
    }
}

module.exports = Num;