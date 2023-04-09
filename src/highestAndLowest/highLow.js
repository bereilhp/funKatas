function highLow(str){
    let x = str.split(" "); // split
    let result = x.map(i=>Number(i)); // pass them as numbers into an array 
    let arrSort = result.sort((a, b) => a - b); // sort the array 
    let big = arrSort[arrSort.length - 1]; // return the last number from the array (biggest)
    let small = arrSort[0]; // return the first  number from the array (smallest)
    return `${big} ${small}`;
}

module.exports = highLow;