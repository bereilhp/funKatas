const rectangle = {
    buildRec : function(xmin,ymin,xmax,ymax){
        if(xmin === xmax){
            return "Not a rectangle";
        }else if(ymin === ymax){
            return "Not a rectangle";
        }
        return "a rectangle";
    }
};

module.exports = {rectangle};