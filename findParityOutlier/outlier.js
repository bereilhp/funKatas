function oddy(a) {
    let x = 0 
    for(let i = 0; i < a.length; i++) {
        if(a[i] % 2 == 1){
            x = a[i]
        } 
    }
    return x
}

module.exports = oddy;