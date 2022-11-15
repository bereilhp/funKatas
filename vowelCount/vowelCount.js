function vowelCounter(str){
    let x = 0;

    for(let i = 0; i <= (str.length - 1); i++){
        if((str[i] === "a") || (str[i] === "e") || (str[i] === "i") || (str[i] === "o") || (str[i] === "u")){
            x++;
        }
    }
    return x;       
}


module.exports = vowelCounter;