const queue = {
    queueTime : function(customers, n){
        if(n === 1 ){
            return customers.reduce((a,b) => a+b,0);
        }
    }
};

module.exports = {queue};