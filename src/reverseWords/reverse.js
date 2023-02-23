class Word {
    /**
     * 
     * @param {String} text Stdin that is a string containg a sentence or word
     * @returns The input but reversed
     */
    reverseWord(text){
        let chatArr = text.split("");
        let reverseArr = chatArr.reverse();
        let joinArr = reverseArr.join("");
        return joinArr;
    }
}

module.exports = Word;