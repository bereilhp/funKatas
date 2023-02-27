class Spin {
    spinner(text){
        let counter = 0;
        let textSplit = text.split(" ");
        for(let i in textSplit){
            if(textSplit[i].length > 5){
                counter++;
            }
        }    
        return counter; 
    }        
};

module.exports = Spin;