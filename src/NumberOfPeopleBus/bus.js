const bus = {};

/**
 * 
 * @param {Array} busList 
 * @param {Integer} peopleleft 
 * @returns Number of people left on the bus
 */
bus.numberOfPeople = function(busList, peopleleft){
    let peopleOn = 0;
    let peopleOff = 0;

    for(let i = 0; i < busList.length; i++){
        peopleOn = busList[i][0] + peopleOn;
        peopleOff = busList[i][1] + peopleOff;     
    } 

    return peopleOn - peopleOff; 
}

module.exports =  bus;