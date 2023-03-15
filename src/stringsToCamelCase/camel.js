class Camel {
    camelCase(string) {
        let regex = /-|_|-_/gm
        let split = string.split(regex);
        let ans = [];

        split.forEach(element => {
            if (ans.length === 0) {
                ans.push(element);
            } else {
                ans.push(element.charAt(0).toUpperCase());
                ans.push(element.slice(1));
            }
        });

        return ans.join("");
    }
}

module.exports = Camel;