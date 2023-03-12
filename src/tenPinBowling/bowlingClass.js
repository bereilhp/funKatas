class Bowling {

    splitter(a) {
        let arr = a.split(" "); //.map(Number);
        return arr
    }

    bowlingScoreSimple(a) {
        let arr = this.splitter(a);
        let result = []
        for (let i = 0; i <= (arr.length - 1); i++) {
            result.push(arr[i].charAt(0));
            result.push(arr[i].charAt(1));
        }
        return (result.map(Number).reduce((a, b) => a + b, 0));
    }

    bowlingScoreSpare(a) {
        let arr = this.splitter(a);
        let result = [];
        for (let i = 0; i <= (arr.length - 1); i++) {
            if (arr[i].charAt(1) == '/') {
                result.push(arr[i].charAt(0));
                let diferencia = 10 - arr[i].charAt(0);
                result.push(diferencia.toString());
                result.push(arr[i + 1].charAt(0));
            } else {
                result.push(arr[i].charAt(0));
                result.push(arr[i].charAt(1));
            }
        }
        return (result.map(Number).reduce((a, b) => a + b, 0));
    }

    bowlingScoreSpareWithExtra(a) {
        let arr = this.splitter(a);
        let result = [];
        for (let i = 0; i <= (arr.length - 1); i++) {
            if (arr[i].charAt(1) == '/') {
                result.push(arr[i].charAt(0));
                let diferencia = 10 - arr[i].charAt(0);
                result.push(diferencia.toString());
                result.push(arr[i + 1].charAt(0));
            } else {
                result.push(arr[i].charAt(0));
                result.push(arr[i].charAt(1));
            }
        }
        return (result.map(Number).reduce((a, b) => a + b, 0) - result[result.length - 2]);
    }


    bowlingScoreStrike(a) {
        let arr = this.splitter(a);
        let result = []
        for (let i = 0; i <= (arr.length - 1); i++) {
            if (arr[i].charAt(0) == 'X') {
                let strike = 10;
                result.push(strike.toString());
                result.push(arr[i + 1].charAt(0));
                result.push(arr[i + 1].charAt(1));
            } else {
                result.push(arr[i].charAt(0));
                result.push(arr[i].charAt(1));
            }
        }
        return (result.map(Number).reduce((a, b) => a + b, 0));
    }

    bowlingScoreStrikeWithExtra(a) {
        let arr = this.splitter(a);
        let result = []
        for (let i = 0; i <= (arr.length - 1); i++) {
            if (arr[i].charAt(0) == 'X') {
                let strike = 10;
                result.push(strike.toString());
                result.push(arr[i + 1].charAt(0));
                result.push(arr[i + 1].charAt(1));
            } else {
                result.push(arr[i].charAt(0));
                result.push(arr[i].charAt(1));
            }
        }

        return (result.map(Number).reduce((a, b) => a + b, 0) - result[result.length - 2] - result[result.length - 1]);
    }

    bowlingScoreStrikeWithExtraSpare(a) {
        let arr = this.splitter(a);
        let result = []
        for (let i = 0; i <= (arr.length - 1); i++) {
            if (arr[i].charAt(0) == 'X') {
                let strike = 10;
                result.push(strike.toString());
                result.push(arr[i + 1].charAt(0));
                result.push(arr[i + 1].charAt(1));
            } else {
                result.push(arr[i].charAt(0));
                result.push(arr[i].charAt(1));
            }
        }

        return (result.map(Number).reduce((a, b) => a + b, 0));
    }

    bowlingScoreStrikeWithExtraSpareAndStrike(a) {
        let arr = this.splitter(a);
        let result = [];
        for (let i = 0; i <= (arr.length - 1); i++) {
            if (arr[i].charAt(0) == 'X') {
                let strike = 10;
                result.push(strike.toString());
                result.push(arr[i + 1].charAt(0));
                result.push(arr[i + 1].charAt(1));
            } else if(arr[i].charAt(1) == "X"){
                let strike = 10;
                result.push(arr[i].charAt(0))
                result.push(strike);
            } else {
                result.push(arr[i].charAt(0));
                result.push(arr[i].charAt(1));
            }
        }

        return (result.map(Number).reduce((a, b) => a + b, 0));
    }
}

module.exports = Bowling; 