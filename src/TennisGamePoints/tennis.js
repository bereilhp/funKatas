function tennisScore(score){
    let splitScore = score.split("-");
    //console.log(splitScore);
    //let p1Score = score[0] + score[1];
    let p1Score = splitScore[0];
    //let p2Score = (score.charAt(3) + score.charAt(4))
    let p2Score = splitScore[1];
    //console.log(p1Score + " " + p2Score);
    

    let arr = ["love", "15", "30", "40", "Ad", "Game", "all"];

    let p1ScoreNum = arr.indexOf(p1Score);
    let p2ScoreNum = arr.indexOf(p2Score);
    //console.log(p2ScoreNum);


    if(p2ScoreNum === 6){
        return p1ScoreNum + p1ScoreNum;
    }else if(score === "Deuce" || (score === "deuce")){
        return 6;
    }else if (score === "Advantage p1"){
        return 7
    }else if(score === "Advantage p2"){
        return 7;
    }else if(p1ScoreNum == 5){
        return `Game Player 1. He won by ${(p1ScoreNum-1) - p2ScoreNum} points`
    }else if(p2ScoreNum === 5){
        return `Game Player 2. He won by ${(p2ScoreNum-1)- p1ScoreNum} points`
    }
    
    return p1ScoreNum + p2ScoreNum;
   
}

function tennisScoreGames(score){
    let splitScore = score.split("-");
    let p1GameScore = Number(splitScore[0]);
    let p2GameScore = Number(splitScore[1]);

    if(p1GameScore > p2GameScore ){
        return `Player p1 is winning by ${p1GameScore-p2GameScore} games and the score is ${score}`
    }else if (p1GameScore < p2GameScore){
        return `Player p2 is winning by ${p2GameScore-p1GameScore} games and the score is ${score}`
    } else 
        return `They are tied in games and the score is ${score}`
     
}

module.exports = { tennisScore, tennisScoreGames };