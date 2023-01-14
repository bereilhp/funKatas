const car = {
    type: "Fiat",
    model: "500",
    color: "white"
}

car.sayModel = function(){
    return car.model;

}

car.sayType = function(){
    return car.type;
}

module.exports = car;