class Word {
    constructor(listOfChars){
        this.listOfChars = listOfChars;
    }
    /**
     * 
     * @param {String} text Stdin that is a string containg a sentence or word
     * @returns The input but reversed
     */
    reverseWord(text){
        let chatArr = text.split("");
        let reverseArr = chatArr.reverse();
        let joinArr = reverseArr.join("");
        let reverseAgain = joinArr.split(" ").reverse().join(" ");
        return reverseAgain;
        }
    }

let wordy = new Word("hello");
console.log(wordy.listOfChars);
let wordy2 = new Word;
wordy2.listOfChars = "Hello"
wordy2.newAttribute = "Test"
console.log(wordy2);



module.exports = Word;