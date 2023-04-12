const password = {
    validator : function(pass){
        let pattern = /^[a-zA-Z0-9]{6,}$/;
        return pattern.test(pass);
    }
};

module.exports = {password};