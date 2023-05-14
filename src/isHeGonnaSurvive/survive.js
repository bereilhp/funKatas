class Survive {
    isHeGonnaSurvive(bullets, dragons){
        if(bullets == 1 && dragons == 0){
            return undefined;
        } else return bullets / dragons >= 2;
    }
}

module.exports = {
    Survive
};