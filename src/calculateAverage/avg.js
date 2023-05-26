class Average {
  findAvg(array){
    if (!array.length){
      return 0
    } else {
        let size = array.length;
        let reducedArray = array.reduce((a,b) => a+b,0)
        return reducedArray/size;
    }
  }
}

module.exports = {
  Average
}