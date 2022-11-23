function removeTrolls(str) {
    return str.replace(/a|e|i|o|u|A|E|I|O|U/g,""); // also str.replace(/[aeiou]/gi
}

module.exports = removeTrolls;