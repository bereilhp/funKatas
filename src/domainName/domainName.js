const domain = {
    domainName : function(link){
        
        if(!(link.startsWith("http://") || link.startsWith("https://"))){
            link = "http://" + link;
        }

        let myURL = new URL(link);
        let hostname = myURL.hostname;
        let splitHostname = hostname.split(".");

        if(splitHostname[0] == "www"){
            return splitHostname[1];
        } else return splitHostname[0];
    }
};

module.exports = { domain };