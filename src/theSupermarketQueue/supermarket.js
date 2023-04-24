const queue = {
    queueTime : function(customers, n){
        if(n === 1 ){
            return customers.reduce((a,b) => a+b,0);
        }else if(n === 2){
            let arrayWithoutFirstElement = customers.slice(1);
            if(customers[0] > arrayWithoutFirstElement.reduce((a,b) => a+b,0)){
                return customers[0];
            }
        }
    }
};

module.exports = {queue};