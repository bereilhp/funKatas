function fuel(nearestPump, mpg, gallonsLeft){
    fuelTotal = mpg * gallonsLeft;
    return nearestPump <= fuelTotal;
}

module.exports = fuel;