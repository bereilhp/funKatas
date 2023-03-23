const conversor = {
    ipv4 : function(num){
        if(num == 0){
            return "0.0.0.0"
        }
        let numToBin = num.toString(2);
        let newArr = numToBin.split("");
        
        let splitArr32 = newArr.slice(0,8).join("");
        let splitArr24 = newArr.slice(8,16).join("");
        let splitArr16 = newArr.slice(16,24).join("");
        let splitArr8 = newArr.slice(24,32).join("");

        let num32 = parseInt(splitArr32,2);
        let num24 = parseInt(splitArr24,2);
        let num16 = parseInt(splitArr16,2);
        let num8 = parseInt(splitArr8,2);

        return `${num32}.${num24}.${num16}.${num8}`;
    }
}

module.exports = conversor;