function find(array, element) {
    return  array.indexOf(element) >= 0 ? array.indexOf(element)  : "Not found";
}

module.exports = {
    find
};