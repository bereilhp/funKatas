class Camel {
    camelCase (string){
        let split = string.split("-")
        let a = string.charAt(0).toUpperCase()
        return split;
    }
}

module.exports = Camel;