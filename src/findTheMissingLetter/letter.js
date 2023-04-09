const letter = {
    abecedario : function (compare) {
        let abc = "abcdefghijklmnopqrstuvwxyz";
        let splitABC = abc.split("");
        let start;
        let lower;
        
        if(compare[0] == compare[0].toUpperCase()){
            lower = compare.map(element => {
                return element.toLowerCase();
            });
            start = splitABC.indexOf(lower[0]);
        } else {
            start = splitABC.indexOf(compare[0]);
        }

        let end = start + compare.length + 1;
        let compareArr = splitABC.slice(start,end);

        if(compare[0] == compare[0].toUpperCase()){
            let ans = compareArr.filter(element => !lower.includes(element));
            let ansJoin = ans.join("");
            return ansJoin.toUpperCase();
        } else {
            let ans = compareArr.filter(element => !compare.includes(element));
            let ansJoin = ans.join("");
            return ansJoin.toLowerCase();
        }
    }
};

module.exports = letter;
