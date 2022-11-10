function summation(num){
    let ans = 0;
    for(let i = 1; i <= num; i++){
        ans = ans + i;
    }
    return ans;
}

module.exports = summation;
