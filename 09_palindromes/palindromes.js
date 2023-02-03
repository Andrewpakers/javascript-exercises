const palindromes = function (targetStr) {
    const forwardArray = targetStr.split('')
    const backwardArray = [];
    let compStr1, compStr2;
    for (i = 0; i < forwardArray.length; i++) {
        if (!!forwardArray[i].match(/[.,:!?]/)) {
            forwardArray.splice(i,1);
            continue;
        }
        backwardArray.unshift(forwardArray[i]);
    }
    compStr1 = forwardArray.join("").replace(/\s/g,'');
    compStr2 = backwardArray.join("").replace(/\s/g,'');
    console.log("compStr1: " + compStr1 + " compStr2: " + compStr2);
    if (compStr1.toLowerCase() === compStr2.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};
palindromes("A car, a man, a maraca.");
// Do not edit below this line
module.exports = palindromes;
