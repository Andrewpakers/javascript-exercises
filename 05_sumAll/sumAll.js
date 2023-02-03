const sumAll = function(arg1, arg2) {
    let sum = 0;
    let rangeBottom, rangeTop;
    if (arg1 < arg2) {
        rangeBottom = arg1;
        rangeTop = arg2;
    } else {
        rangeBottom = arg2;
        rangeTop = arg1;
    }
    if (rangeBottom < 0 || rangeTop < 0) {
        return "ERROR";
    } else if (typeof rangeBottom != "number" || typeof rangeTop != "number") {
        return "ERROR";
    }
    for (let i = rangeBottom; i <= rangeTop; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
