class Str {

    split(strin) {
        if(strin == ""){
            return [];
        }else {
            let addLastChar = this.lastChar(strin);
            let splitArr = this.splitArrTwo(addLastChar);
            return splitArr;
        }
    }

    splitArrTwo(strin) {
        let splitTwo = strin.match(/(..?)/g);
        return splitTwo;
    }

    lastChar(strin){
        if(strin.length %2 == 0){
            return strin;
        }else {
            return strin + "_";
        }
    }

    splitter(str){
        if(str == ""){
            return [];
        }else {
            if(str.length %2 == 0){
                let splitArr = str.match(/(..?)/g);
                return splitArr;
            }else {
                let addEnd = str + "_";
                let splitArr = addEnd.match(/(..?)/g);
                return splitArr;
            }
        }
    }
}

module.exports = Str;
