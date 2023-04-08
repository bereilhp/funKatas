const extreme = {
    diff : function (array) { 
        let biggest = Math.max(...array);
        let smallest = Math.min(...array);
        return biggest - smallest; 
    }
}

module.exports = extreme; 