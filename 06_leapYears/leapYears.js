const leapYears = function(targetYear) {
    if (targetYear % 100 === 0 && targetYear % 400 === 0) {
        return true;
    } else if (targetYear % 4 === 0 && targetYear % 100 != 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
