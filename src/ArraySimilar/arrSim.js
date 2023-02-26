class Similar {
    arraySimilar(arr1,arr2){
        let arr1Sorted = arr1.sort((a, b) => a - b);
        let arr2Sorted = arr2.sort((a, b) => a - b);
        let arr1JSON = JSON.stringify(arr1Sorted);
        let arr2JSON = JSON.stringify(arr2Sorted);
        return arr1JSON === arr2JSON;
    }
}

module.exports = Similar;