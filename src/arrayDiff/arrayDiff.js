class Arr {
    diff(arr1,arr2){
        let arrayAns = arr1.filter(a => !arr2.includes(a));
        return arrayAns;
    }
};

module.exports = Arr;