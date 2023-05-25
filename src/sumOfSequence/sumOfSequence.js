class Sequence {
    sum(begin,end,step){
        if(begin > end){
            return 0;
        } else if (begin === end){
            return begin;
        }
    }
}

module.exports = {
    Sequence
};