class Spin {
    spinner(text){
        let counter = 0;
        let textSplit = text.split(" ");
        for(let i in textSplit){
            if(textSplit[i].length > 5){
                textSplit[i] = textSplit[i].split("").reverse().join("")
            }
        }
        return textSplit.join(" ")    
    }        
};

module.exports = Spin;