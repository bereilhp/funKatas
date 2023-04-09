const heron = {};

heron.calculateS = function(a,b,c) {
    let s = (a+b+c)/2;
    return s;
};

heron.calculate = function(a,b,c){
    let s = this.calculateS(a,b,c);
    let ans = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return Number(ans.toFixed(2));
};

module.exports = heron;