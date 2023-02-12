letter = new Object;

//letter.name = "yes"

letter.caseCheck = function (firstLetter, secondLetter) {
    if ((typeof (firstLetter) != "string") || (typeof (secondLetter) != "string")) {
        return -1
    } else if ((typeof (firstLetter) === "string") && (typeof (secondLetter) === "string")) {
        if ((firstLetter.toLowerCase() == firstLetter) && (secondLetter.toLowerCase() == secondLetter)) {
            return 1;
        } else if ((firstLetter.toUpperCase() == firstLetter) && (secondLetter.toUpperCase() == secondLetter)) {
            return 1;
        } else
            return 0
    }
}

module.exports = letter