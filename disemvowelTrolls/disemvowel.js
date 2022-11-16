function removeTrolls(str) {
    return str.replace(/a|e|i|o|u|A|E|I|O|U/g,"");
}

module.exports = removeTrolls;