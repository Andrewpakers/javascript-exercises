const caesar = function(targetStr, shift) {
    const messageArray = [];
    if (shift >= 26) {
        shift = (shift % 26);
    } else if (shift <= -26) {
        shift = shift % -26;
    }
    for (let i = 0; i < targetStr.length; i++){
        let letterCode = targetStr.charCodeAt(i) + shift;
        let startingCode = targetStr.charCodeAt(i);
        console.log("character: " + targetStr.charAt(i) + " code: " + targetStr.charCodeAt(i) + " shift: " + shift + " lettercode: " + letterCode);
        if (!!targetStr.charAt(i).match(/[.,:!?]/) || targetStr.charAt(i).match(/\s/)) {
            messageArray.push(targetStr.charAt(i));
            continue;
        } else if (letterCode > 122) {
            letterCode = 97 + (letterCode - 123);
        } else if (letterCode > 90 && targetStr.charCodeAt(i) < 97){
            letterCode = 65 + (letterCode - 91);
        }else if (letterCode < 65 && startingCode >= 65 && startingCode <= 90){
            letterCode = 90 - (64 - letterCode);
        }

        messageArray.push(String.fromCharCode(letterCode));
    }
    return messageArray.join("");
};
console.log(caesar("Mjqqt, Btwqi!", -5));
/*
Z=90
z=122
A=65
a=97
String.fromCharCode
*/
// Do not edit below this line
module.exports = caesar;
