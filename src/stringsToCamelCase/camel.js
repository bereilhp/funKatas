class Camel {
    camelCase (string){
        let split = string.split("-");
        let ans = [];

        split.forEach(element => {
            ans.push(element.charAt(0).toUpperCase());
            ans.push(element.slice(1))
        });
        
        return ans.join("");
    }
}

module.exports = Camel;