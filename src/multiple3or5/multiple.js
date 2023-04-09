function sumMult(n){
    let x = [];
    for(let i = 1; i < n; i++){
        if((i%3 === 0) || (i%5 === 0)){
            x.push(i);
        }
    }
    let sum = x.reduce(function(x,y){ return x + y;},0);
    return sum;
}

module.exports = sumMult;