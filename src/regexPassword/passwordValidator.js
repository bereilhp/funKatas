const password = {
    validator : function(pass){
        let pattern = /^[a-z0-9]{6,}$/;
        return pattern.test(pass);
    }
};

module.exports = {password};