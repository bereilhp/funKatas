let ans = 0;

function persistent(number) {
    let splitNumString = number.toString().split("");
    let arrNums = splitNumString.map(Number);

    if (arrNums.length == 1) {
        return 0;
    }

    let multp = arrNums.reduce((a, b) => a * b);
    ans = ans + 1;
    let finalAns = ans;

    if (multp > 9) {
        persistent(multp);
    }

    ans = 0;

    return finalAns;
}

module.exports = persistent;