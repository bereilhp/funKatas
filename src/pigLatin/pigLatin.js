const pigLatin = {
    pigIt : function(string){
        let splitter = string.split(" ");
        let ans = [];

        splitter.forEach(element => {
            let first = element.charAt(0);
            element = element.substring(1);
            ans.push(element + first);  
        });
        
        let aySplit = ans.map(e => e + "ay")
        return aySplit.join(" ");
    }
}

module.exports = pigLatin;