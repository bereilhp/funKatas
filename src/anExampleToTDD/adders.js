function add(a,b){
    try{
        if(typeof(a) == "number" && typeof(b)== "number"){
            return a+b; 
        }else 
            throw "Not a number"
    }catch(e){
        return e;
    }
};



module.exports = add;