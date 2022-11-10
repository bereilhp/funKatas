const x = (a) => {
    if(a % 3 == 0 && a % 5 == 0){
        return "fizzBuzz";
    }else if(a % 3 == 0) {
        return "fizz";
    }else if(a % 5 == 0) {
        return "buzz";
    }else 
        return a
    
}

module.exports = x;