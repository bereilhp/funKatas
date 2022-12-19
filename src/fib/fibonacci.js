let fib = {};

fib.Nnumber = function(number){
    let arr = [0,1];
    for (let i = 2; i <= number; i++) {
        arr[i] = arr[i - 2] + arr[i - 1]; 
    }
    return arr[number-1];
}


module.exports = fib;