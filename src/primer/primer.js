class num {
    primeNumber(number){
        try {
            if(typeof(number) != "number"){
                throw new Error ("Not a Number");
            }else if(number < 0){
                throw "Negative Number";
            }
        } catch (error) {
            return error.toString();
        }
        return number;
    }
}

module.exports = {
    num
};