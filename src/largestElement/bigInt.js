num = {};

/**
 * 
 * @param {int} n Output the n largest elements from the list 
 * @param {list} array List of different numbers
 * @returns New list containing n elements but those n elements the largest/biggest of the list
 */
num.biggestInt = function(n,array){
    let orderedArray = array.sort((a, b) => a - b).reverse();
    let newArray = orderedArray.slice(0,n).reverse(); 
    return newArray;
}

module.exports = num;

