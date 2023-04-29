/**
 * Class num
 */
class num {
    /**
     * 
     * @param {Int} number Any  positive number bigger than zero
     * @returns true or false if number is prime
     */
    primeNumber(number){
        try {
            if(typeof(number) != "number"){
                throw new Error ("Not a Number");
            }else if(number <= 1){
                throw "Not valid Number";
            }
        } catch (error) {
            return error.toString();
        }

        let count = 0;
        for(let i = 1; i <= number; i++){
            if(number % i === 0){
                count++;
            }
        }

        return count === 2;
    }
}

module.exports = {
    num
};