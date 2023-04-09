class Words {
    constructor(type){
        this.type = type;
    }

    counter(list){
        let wordCount = list.split(" ").length;
        if(list[0] == " "){
            return wordCount - 1;
        }else { 
            return wordCount;
        }
    }
}

module.exports = Words;