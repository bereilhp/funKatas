const rectangle = {
    buildRec : function(xmin,ymin,xmax,ymax){
        if(xmin === xmax){
            return "Not a rectangle";
        }else if(ymin === ymax){
            return "Not a rectangle";
        }
        return "A rectangle";
    },

    area : function(xmin,ymin,xmax,ymax){
        let base = xmax - xmin;
        let height = ymax;
        return base * height;
    }
};

module.exports = {rectangle};