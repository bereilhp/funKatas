class Productv {
    maxProduct(array){
        let arraySort = array.sort((a,b) => a - b);
        let n = arraySort.length;
        return arraySort[n-1] * arraySort[n-2];
    }
}

module.exports = {
    Productv
};