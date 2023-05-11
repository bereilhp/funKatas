class palindrome {
    isPalindrome(word){
        try {
            if(typeof(word) != "string"){
                throw "No es una palabra";
            }
            let reverseString = "";

            for (let i = word.length-1; i >= 0; i--){
                reverseString = reverseString + word[i];
            }

            return word === reverseString;

        } catch (error) {
            return error;
        }
    }
}

module.exports = {
    palindrome
};