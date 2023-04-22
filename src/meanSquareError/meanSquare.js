const meanSqr = {
    meanSqrError: function(firstArr, secondArr){
        let arrayAns = [];
        for(let i = 0; i < firstArr.length; i++){
            let ans = secondArr[i] - firstArr[i];
            arrayAns.push(ans);
        }

        let mapArrayAns = arrayAns.map((e) => e**2);
        let addyMap = mapArrayAns.reduce((a,b) => a+b, 0);
        let divAddyMap = addyMap/3;

        return divAddyMap;
    }
};

module.exports = {meanSqr};