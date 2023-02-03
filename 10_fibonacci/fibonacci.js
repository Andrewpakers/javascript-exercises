const fibonacci = function(arg1) {
    const fibSec = [1,1];
    if (arg1 < 1) {
        return "OOPS";
    }
    for (let i = 2; i < arg1; i++) {
        fibSec.push(fibSec[i-2]+fibSec[i-1]);
    }
    console.log(fibSec);
    return fibSec[arg1-1];
};

fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
