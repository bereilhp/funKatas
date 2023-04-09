function twoVal(n, a, b) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
        if(i%2 == 1){
            arr.push(a);
        } else 
            arr.push(b);
    }
    return arr;
}

module.exports = twoVal;