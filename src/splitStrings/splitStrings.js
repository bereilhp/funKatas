class Str {

    split(strin) {
        if(strin == ""){
            return []
        }else {
            let addLastChar = this.lastChar(strin);
            let splitArr = this.splitArrTwo(addLastChar);
            return splitArr;
        }
    };

    splitArrTwo(strin) {
        let splitTwo = strin.match(/(..?)/g);
        return splitTwo;
    };

    lastChar(strin){
        if(strin.length %2 == 0){
            return strin;
        }else {
            return strin + "_";
        }
    }
};

module.exports = Str;