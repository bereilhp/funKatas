function dni(a){ 
    let x = dniCharsToArray(a)
    if(x.length == 9){
        for(let i = 0; i < (x.length-1); i++){
            if(typeof(x[i]) == 'number'){
                    continue;
            } else
                return "The ID should only be numbers and the last a letter";
        }
    
        if((x[8] == "U") || (x[8] == "I") || (x[8] == "O") || (x[8] == "Ñ")){
            return "ID should not contain this letter"; 
        } else      
            return x.length;

    } else 
        return "The ID should only be 9 characters long";
}

function dniSuma(a){
    let x = dniCharsToArray(a);
    let arr = [];
    for(let i = 0; i < (x.length-1); i++){
        arr.push(x[i]);
    }

    return arr.reduce((a,b) => a+b,0);  
}

function dniLetra(a){
    let arr = ["T","R","W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]; 
    let x = dniSuma(a);
    let ans = x % 23
    
    if(a[8] == arr[ans-1]){
        return "ID valid";
    }else 
        return "ID invalid";
    

}

function nie(a){
    let x = dniCharsToArray(a);
    //console.log(x);
    if(a[0] == 0){
        return "X";
    } else if(a[0] == 1){
        return "Y";
    } else if(a[0] == 2){ 
        return "Z";
    }
}

function dniCharsToArray(a){
    let arr = [];
    for(let i=0; i<a.length-1; i++){
        arr.push(Number(a[i]));
    }
    let NoNaN = arr.map(value => isNaN(value) ? "letter" : value);
    NoNaN.push(a[a.length-1]);

    return NoNaN
    
}

function excepcionDNI(a){
    try{
        let arr = dniCharsToArray(a);
        if (arr.length != 9){
            //throw new Error("Incorrect Size");
            throw "Incorrect Size";
            //return "Incorrect Size"
        }else
            return "Correct Size";
    }catch(e){
       return e;
    }
}

module.exports = { dni, dniSuma, dniLetra, nie, dniCharsToArray, excepcionDNI };

