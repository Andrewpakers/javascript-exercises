const add = function(arg1, arg2) {
	return arg1 + arg2;
};

const subtract = function(arg1, arg2) {
  return arg1 - arg2;
};

const sum = function(arg1) {
	let sum = 0;
  for (let i = 0; i < arg1.length; i++) {
    sum += arg1[i];
  }
  return sum;
};

const multiply = function(arg1) {
  let result = 1;
  for (let i = 0; i < arg1.length; i++){
    result *= arg1[i];
  }
  return result;
};

const power = function(arg1, arg2) {
  return arg1 ** arg2;
	
};

const factorial = function(arg1) {
	let result = 1;
  if (arg1 == 0 || arg1 == 1){
    return 1;
  } else {
    for (let i = arg1; i >= 1; i--) {
      result = result * i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
