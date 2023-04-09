function square(num){
    let x = [...num+""].map(n=>+n);
    let ans = x.map(function(num){
        return num**2;
    });
   
    let joined = ans.join("");
    let nums = Number(joined);
    return nums;
}

module.exports = square;