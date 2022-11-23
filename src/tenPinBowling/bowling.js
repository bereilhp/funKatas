function bowlingScoreSimple(a){
    const arr = a.split(" "); //.map(Number);
    let result = []
    for(let i = 0; i <= (arr.length - 1); i++){
            result.push(arr[i].charAt(0)); 
            result.push(arr[i].charAt(1));
        }
    return (result.map(Number).reduce((a,b) => a + b,0));
}

function bowlingScoreSpare(a){
    const arr = a.split(" "); //.map(Number);
    let result = []
    for(let i = 0; i <= (arr.length - 1); i++){
        if(arr[i].charAt(1) == '/'){
            console.log("Soy una barra");
            result.push(arr[i].charAt(0)); 
            let diferencia = 10 - arr[i].charAt(0);
            console.log(diferencia);
            result.push(diferencia.toString()); 
        } else {
            result.push(arr[i].charAt(0)); 
            result.push(arr[i].charAt(1));
        }
    }
    return (result);
}

function bowlingScoreStrike(a){
    const arr = a.split(" "); //.map(Number);
    let result = []
    for(let i = 0; i <= (arr.length - 1); i++){
        if(arr[i] == "X"){
            result.push(arr[i].charAt(0)); 
        }else {
            result.push(arr[i].charAt(0)); 
            result.push(arr[i].charAt(1));
        }
    }
    return (result.map(Number).reduce((a,b) => a + b,0));
}

module.exports = { bowlingScoreSimple, bowlingScoreSpare } ;