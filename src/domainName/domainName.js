const domain = {
    domainName : function(link){
        let myURL = new URL(link);
        let hostname = myURL.hostname;
        let splitHostname = hostname.split(".");

        if(splitHostname.length == 2){
            return splitHostname[0];
        } else return splitHostname[1];
        
    }
};

module.exports = { domain };