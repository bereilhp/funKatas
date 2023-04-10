const hashtag = {
    hashtagGenerator : function(text) {

        if(text == ""){
            return false;
        }
        
        let splitText = text.split(" ");

        for (let i = 1; i < splitText.length; i++) {
            splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].slice(1);
        }

        return "#" + splitText.join("");
    }
};

module.exports = { hashtag };