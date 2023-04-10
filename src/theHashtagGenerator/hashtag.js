const hashtag = {
    hashtagGenerator : function(text) {

        if(text == "" || text == " " || text == " ".repeat(200)){
            return false;
        }

        let splitText = text.split(" ");

        for (let i = 0; i < splitText.length; i++) {
            splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].slice(1);
        }

        if(splitText.join("").length >= 140){
            return false;
        }

        return "#" + splitText.join("");
    }
};

module.exports = { hashtag };