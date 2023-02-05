trim = {
    "string": "test"
};

trim.trimmerString = function (text, cutter) {
    let textSize = text.length
    if(textSize > cutter){ // Means that text is bigger than cutter there will be three dots
        if(cutter > 3){
            let newText = text.slice(0, cutter-3);
            return newText+"...";
        } else if (cutter <=3){
            let newText = text.slice(0, cutter); 
            return newText+"..."
        }
    } else {
        return text
    }
}

module.exports = trim;