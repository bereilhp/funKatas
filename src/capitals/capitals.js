function capital(a){
    return `The capital of ${a.state || a.country} is ${a.capital}`;
}

module.exports = capital;