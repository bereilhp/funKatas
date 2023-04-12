const password = {
    validator : function(pass){
        let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        return pattern.test(pass);
    }
};

module.exports = {password};