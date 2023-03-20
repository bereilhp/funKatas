const prime = {
    is_prime: function (n) {
        let s = Math.sqrt(n);
        for (let i = 2; i <= s; i++) {
            if (n % i === 0) return false;
        }
        return n >= 2;
    }
};

module.exports = prime;