function players(p1,p2){
    if(p1 === 0 && p2 === 0){
        return "love-love"
    } else if(p1 === 1 && p2 === 0){
        return "15-love"
    } else if(p1 === 1 && p2 === 1){
        return "15-all"
    } else if(p1 === 2 && p2 === 0){
        return "30-love"
    } else if(p1 === 2 && p2 === 2){
        return "30-all"
    } else if(p1 === 3 && p2 === 2){
        return "40-30"
    } else if(p1 === 3 && p2 === 3){
        return "Deuce"
    } else if(p1 === 3 && p2 === 0){
        return "40-love";
    } else if(p1 === 4 && p2 === 0){
        return "Game p1";
    }
}  

function tennisScore(score){
    let splitScore = score.split("-");
    //console.log(splitScore);
    //let p1Score = score[0] + score[1];
    let p1Score = splitScore[0];
    //let p2Score = (score.charAt(3) + score.charAt(4))
    let p2Score = splitScore[1];
    //console.log(p1Score + " " + p2Score);
    

    let arr = ["love", "15", "30", "40", "all"];

    let p1ScoreNum = arr.indexOf(p1Score);
    let p2ScoreNum = arr.indexOf(p2Score);
    //console.log(p1ScoreNum)

    if(p1ScoreNum ===  4){
        return p2ScoreNum + p2ScoreNum;
    } else if(p2ScoreNum === 4)
        return p1ScoreNum + p1ScoreNum;
    
    return p1ScoreNum + p2ScoreNum;
   
    

}

module.exports = { players, tennisScore };