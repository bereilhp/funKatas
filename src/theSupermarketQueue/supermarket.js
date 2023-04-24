const queue = {
    queueTime : function(customers, n){

        if(n === 1 ){
            return customers.reduce((a,b) => a+b,0);
        }else if(n === 2){
            let arrayWithoutFirstElement = customers.slice(1);
            if(customers[0] > arrayWithoutFirstElement.reduce((a,b) => a+b,0)){
                return customers[0];
            }else {
                let till1 = 0;
                let till2 = 0;

                for(let i = 0; i < customers.length; i++){
                    if(i % 2 === 0 ){
                        till1 = till1 + customers[i];
                    }else till2 = till2 + customers[i];
                }

                let ans = Math.max(till1, till2);
                return ans;
            }
        }else if(n > customers.length){
            return Math.max(...customers);
        }
    }
};

module.exports = {queue};