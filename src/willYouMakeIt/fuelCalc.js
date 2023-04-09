function fuel(nearestPump, mpg, gallonsLeft){
    let fuelTotal = mpg * gallonsLeft;
    return nearestPump <= fuelTotal;
}

module.exports = fuel;