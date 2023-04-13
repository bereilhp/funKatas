const num = {
    lastDigit : function(a,b){
        let ans = a**b;
        let ansToString = ans.toString();
        let stringSlice = ansToString.slice(-1);
        let ansNum = Number(stringSlice);
        return ansNum;
    }
};

module.exports = { num };