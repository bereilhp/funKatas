class Num { 
    
    constructor() {
        this.number = 0;
    }
    
    persistent (number, value){
        let ans = value || 0;
        let splitNumString = number.toString().split("");
        let arrNums = splitNumString.map(Number);

        if(arrNums.length == 1){
            return 0
        };

        let multp = arrNums.reduce((a,b) => a*b);
        ans = ans + 1 
        
        let newAns = ans
        this.number = ans
    
        if(multp > 9){
            this.persistent(multp, ans);
        }
    
        return this.number;

    }
}

module.exports = Num;