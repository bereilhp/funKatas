class Product {
    maxProduct(array){
        let firstMax = Math.max(...array);
        let newArray = array.filter(num => num != firstMax);
        let secondMax = Math.max(...newArray);
        return firstMax * secondMax;
    }
}

module.exports = {
    Product
};