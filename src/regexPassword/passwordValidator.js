const password = {
    validator : function(pass){
        let pattern = /^.{6,}$/;
        return pattern.test(pass);
    }
};

module.exports = {password};