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
    },

    perimeter : function(xmin,ymin,xmax,ymax){
        let base = xmax - xmin;
        let height = ymax;
        return 2 * (base + height);
    },

    center : function(xmin,ymin,xmax,ymax){
        let base = xmax - xmin;
        let height = ymax;
        let base2 = base/2;
        let height2 = height/2;
        return `x = ${base2} & y = ${height2}`;
    },

    diagonal : function(xmin,ymin,xmax,ymax){
        let base = xmax - xmin;
        let height = ymax;
        return Math.sqrt((base ** 2) + (height**2));
    }
};

module.exports = {rectangle};