class Pi {
    estimatePi(randomNumber){
        let points_circle = 0;
        let points_square = 0;

        for (let i = 0; i < randomNumber; i++) {
            let point = [Math.random(), Math.random()]
            let distance = Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2))
        
            if (distance < 1) {
              points_circle++
            }

            points_square++
          }
        
          return (4 * points_circle) / points_square
        }
    }

module.exports = Pi;