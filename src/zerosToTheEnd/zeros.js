const num = {
    moveZeros : function(arr){
        let zerosArray = arr.filter(num => num === 0);
        let otherArray = arr.filter(num => num !=0 || typeof(num) == "object" || typeof(num) == "boolean" || typeof(num) == "string");
        let ans = otherArray.concat(zerosArray);
        return ans;
    }
};

module.exports = num;

