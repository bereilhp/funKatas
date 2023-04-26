/**
 * Class num
 */

class num {
    /**
     * 
     * @param {Number} number Any  positive number bigger than zero
     * @returns true or false if prime
     */
    primeNumber(number){
        try {
            if(typeof(number) != "number"){
                throw new Error ("Not a Number");
            }else if(number <= 0){
                throw "Not valid Number";
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