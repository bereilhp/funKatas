class Arr {
    diff(arr1,arr2){
        let arrayAns = arr1.filter(a => !arr2.includes(a));
        let arrayAnsNoRep = [...new Set(arrayAns)];
        return arrayAnsNoRep;
    }
};

module.exports = Arr;