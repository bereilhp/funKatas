function bowlingScore(a){
    const arr = a.split(" ").map(Number)
    return arr.reduce((a,b) => a + b,0)
}

module.exports = bowlingScore;