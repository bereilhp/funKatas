class Ascii {
    uniTotal(char){
        for(let i = 0; i < char.length; i++){
            return char.charCodeAt(i);
        }
    }
}

module.exports = Ascii;