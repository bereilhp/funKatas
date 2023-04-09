let squared = new Object;

squared.summy = function(list){
    let squaredNums = list.map(x => x**2);
    let sumOfSquared = squaredNums.reduce((a, b) => a + b, 0);
    return sumOfSquared;
};

module.exports = squared;