class Ascii {
    uniTotal(char){
        let counter = 0;
        for(let i = 0; i < char.length; i++){
            counter = counter + char.charCodeAt(i); 
        }
        return counter;
    }
}

module.exports = Ascii;