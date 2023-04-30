/**
 * Class num
 */
class num {
    /**
     * 
     * @param {Int} number Any  positive number bigger than zero
     * @returns true or false if number is prime
     */
    primeNumber(number) {
        try {
            let count = 0;

            if (typeof (number) != "number") {
                throw new Error("Not a Number");
            } else if (number <= 1) {
                throw "Not valid Number";
            } else {
                for (let i = 1; i <= number; i++) {
                    if (number % i === 0) {
                        count++;
                    }
                }
            }
            return count === 2;

        } catch (error) {
            return error.toString();
        }
    }
}

module.exports = {
    num
};