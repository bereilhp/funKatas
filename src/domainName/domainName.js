const domain = {
    domainName : function(link){
        let myURL = new URL(link);
        let hostname = myURL.hostname;
        let splitHostname = hostname.split(".");

        if(splitHostname[0] == "www"){
            return splitHostname[1];
        } else return splitHostname[0];
    }
};

module.exports = { domain };