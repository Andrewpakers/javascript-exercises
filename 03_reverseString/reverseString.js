const reverseString = function(targetStr) {
    let reverseArray = [];
    let returnStr = "";
    for (let i = 0; i < targetStr.length; i++){
        reverseArray.push(targetStr[(targetStr.length - 1) - i]);
    }
    returnStr = reverseArray.join("");
    return returnStr;
};

// Do not edit below this line
module.exports = reverseString;
