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

function dniLetra(a){
    
}

module.exports = { dni, dniLetra };