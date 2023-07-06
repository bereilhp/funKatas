class Reverse {
    reverseList(list){
        let ans = new Array();
        for(let i = list.length-1; i >= 0; i--){
            ans.push(list[i]);
        }
        return ans; //we can also use list.reverse()
    }

}

module.exports = {
    Reverse
};