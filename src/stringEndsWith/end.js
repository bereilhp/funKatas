const stringy = {}

stringy.endWith = function(start,end){
    let startArr = start.split("");
    let compareArr = startArr.splice(start.length - end.length);
    let stringCompare = compareArr.join("");
    return stringCompare === end;
};


module.exports = stringy;

