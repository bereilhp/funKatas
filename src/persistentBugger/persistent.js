class Num { 
    persistent (number, value){
        let ans = value || 0;
        let splitNumString = number.toString().split("");
        let arrNums = splitNumString.map(Number);

        if(arrNums.length == 1){
            return 0;
        };

        let multp = arrNums.reduce((a,b) => a*b);
        ans = ans + 1;
        
        if(multp > 9){
            return this.persistent(multp, ans);
        };

        return ans;
    }
}

module.exports = Num;