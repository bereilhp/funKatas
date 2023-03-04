class Num {
    digitalRoot(num){
        if(num === 0){
            return 0;
        };

        if(num > 9){
            let arr = num.toString().split("");
            let arrToNum = arr.map(Number);
            let sumArrNum = arrToNum.reduce((a,b) => a+b);
            if(sumArrNum < 10){
                return sumArrNum;
            } else
                return this.digitalRoot(sumArrNum);      
        };
    };
};

module.exports = Num;