class palindrome {
    isPalindrome(word){
        try {
            if(typeof(word) != "string"){
                throw "No es una palabra";
            }

            return word;
            
        } catch (error) {
            return error;
        }
    }
}

module.exports = {
    palindrome
};