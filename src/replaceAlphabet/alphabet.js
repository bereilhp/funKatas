class Alphabet {
    abecedario() {
        let abc = "abcdefghijklmnopqrstuvwxyz"
        let splitABC = abc.split("");
        return splitABC;
    }

    alphabetPosition(string) {
        let splitString = string.split("");
        let ans = [];
        let abc = this.abecedario();

        splitString.forEach(letra => {
            abc.forEach(abece => {
                if (letra.toLowerCase() == abece) {
                    ans.push(abc.indexOf(abece)+1)
                };
            });
        });
        
        return ans.join(" ")
    }
}

module.exports = Alphabet;