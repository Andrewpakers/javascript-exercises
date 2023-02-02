const repeatString = function(targetStr, iterations) {
    let returnStr = "";
    for (let i = 0; i < iterations; i++){
        returnStr += targetStr;
    }
    if (iterations < 0) {
        returnStr = "ERROR";
    }
    return returnStr;
};

// Do not edit below this line
module.exports = repeatString;
