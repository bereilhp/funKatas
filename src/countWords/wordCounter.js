class Words {
    constructor(type){
        this.type = type;
    }

    counter(list){
        let wordCount = list.split(" ").length;
        return wordCount;
    }
}

module.exports = Words;