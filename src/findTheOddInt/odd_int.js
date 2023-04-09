const counts = {};
//let arr = []
const findOddy = (input) => {
    input.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    //console.log(Object.keys(counts).length); // print size of an object
    //console.log(Object.keys(counts)); // print size of an object
    for(let i in counts){
        //console.log("Key = " + i + " " + "Value = " + counts[i]); 
        if(counts[i] % 2  == 1){
            return Number(i);
        }
    }
};

module.exports = findOddy;