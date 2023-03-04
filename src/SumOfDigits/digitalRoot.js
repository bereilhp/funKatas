class Num {
    digitalRoot(num){
        if(num > 9){
            let arr = num.toString().split("");
            let arrToNum = arr.map(Number);
            let sumArrNum = arrToNum.reduce((a,b) => a+b)
            return sumArrNum
        }
    }
}

module.exports = Num;