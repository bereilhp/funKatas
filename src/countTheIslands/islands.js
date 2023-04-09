class Island {
    splitMatrix(matrix) {
        let splitter = matrix;
        return splitter;

    }

    analyzer(matrix) {
        let split = this.splitMatrix(matrix);
        let ans = [];
        split.forEach(element => {
            if (element == 0) {
                ans.push("~");
            } else
                ans.push("X");
        });
        
        let stringy = ans.join("");

        return stringy;
    }
}

module.exports = Island;

