"use strict";

exports.filterFunction = (...Args) => {
    let sortedArray = [];
    let uniqueArray = [];
    let combos = [];
    Args.forEach((obj) => {
        const uniqueArr = obj.filter((num, index, arr) => {
            const map = arr.map(newObj => newObj.id).indexOf(num.id) === index;
            return map;
        });
        uniqueArray = uniqueArr;
        const filteredArray = obj.flatMap(x => [x.id]);
        sortedArray = filteredArray;
    });
    const reduce = sortedArray.reduce((result, item) => {
        result[item] = (result[item] || 0) + 1;
        return result;
    }, {});
    for (let keys in reduce) {
        combos.push(reduce[keys]);
    };
    const x = combos.reduce((a, b) => a * b);
    let twoDArray = [];
    for (let i = 0; i < x; i++) {
        twoDArray.push(uniqueArray)
    };
    return twoDArray;
};