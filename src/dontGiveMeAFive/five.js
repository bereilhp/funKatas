function count(a,b) {
    let arr = [];

    for (a; a<=b; a++) {
        arr.push(a);
    }

    const index = arr.indexOf(5); //return 0 if item is found
    
    if(index > -1){
        arr.splice(index,1);
    }

    //console.log(arr)

    return arr.length; 
}

module.exports = count;