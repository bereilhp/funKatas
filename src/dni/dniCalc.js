function dni(a){ 
    if(a.length == 9){
        for(let i = 0; i < (a.length-1); i++){
            if(typeof(a[i]) == 'number'){
                continue;
            } else
                return "The ID should only be numbers and the last a letter";
        }
    
        if(a[8] == "U" || (a[8] == "I") || (a[8] == "O") || (a[8] == "Ñ")){
            return "ID should not contain this letter"; 
        } else      
            return a.length;

    } else 
        return "The ID should only be 9 characters long";
}

function dniSuma(a){
    let arr = [];
    for(let i = 0; i < (a.length-1); i++){
        arr.push(a[i]);
    }

    return arr.reduce((a,b) => a+b,0);  
}

function dniLetra(a){
    let arr = ["T","R","W", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]; 
    let x = dniSuma(a);
    let ans = x % 23
    
    if(a[8] == arr[ans-1]){
        return "ID valid";
    }else 
        return "ID invalid";
    

}

function nie(a){
    let x = dni(a);
    console.log(x);
    if(a[0] == 0){
        return "X";
    } else if(a[0] == 1){
        return "Y";
    } else if(a[0] == 2){ 
        return "Z";
    }
}

module.exports = { dni, dniSuma, dniLetra, nie };

