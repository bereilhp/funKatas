class Zero {
    removeZeros(num){
        if(num === 0){
            return 0;
        } else return Number(String(num).replaceAll("0",""));
    }
}

module.exports = {
    Zero
};