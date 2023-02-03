const removeFromArray = function(targetArray) {
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < targetArray.length; j++) {
            if (targetArray[j] === arguments[i]) {
                targetArray.splice(j, 1);
            }
        }
    }
    return targetArray;



};

// Do not edit below this line
module.exports = removeFromArray;
