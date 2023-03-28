const pigLatin = {
    
    pigIt : function(string){

        let splitter = string.split(" ");
        let ans = [];

        splitter.forEach(element => {
            let first = element.charAt(0);
            element = element.substring(1);
            ans.push(element + first);  
        });
        
        let aySplit = ans.map(e => e + "ay");

        let punctuationFix = [];

        aySplit.forEach(e => {
            if(e == "!ay" || e == "?ay"){
                punctuationFix.push(e.slice(0,1))
            }else punctuationFix.push(e)
        });

        return punctuationFix.join(" ");
    }
}

module.exports = pigLatin;