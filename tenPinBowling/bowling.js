function bowlingScore(a){
    const arr = a.split(" "); //.map(Number);
    let strikes = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'X'){
            strikes++;
            delete arr[i];
        }
    }
    console.log(arr.filter(Number).map(Number));
    return strikes * 10
}

module.exports = bowlingScore;