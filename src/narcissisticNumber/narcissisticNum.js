class Num {
    narcissitic(number){
        let splitNumString = number.toString().split("");
        let arrNums = splitNumString.map(Number);
        let mulArrNums = arrNums.map(num => num**arrNums.length);
        let joinMulArr = mulArrNums.reduce((a,b) => a+b);
        let ans = (joinMulArr === number)        
        return ans;
    }
}

module.exports = Num;