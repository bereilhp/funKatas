function oddy(a) {
    let x = 0 
    for(let i = 0; i < a.length; i++) {
        if(a[i] % 2 == 1){
            x = a[i]
        } 
    }
    return x
}

function eveny(a) {
    let x = 0 
    for(let i = 0; i < a.length; i++) {
        if(a[i] % 2 == 0){
            x = a[i]
        } 
    }
    return x
}

function detector(a){
    let x = a.reduce((a, b) => a+b,0);
    if (x % 2 === 0){
        return eveny(a);     
    } else 
        return oddy(a);
}


module.exports = { oddy, eveny, detector };