const convertToCelsius = function(targetTemp) {
  let result = parseFloat(((targetTemp -32) * (5/9)).toFixed(1));
  return result;
};

const convertToFahrenheit = function(targetTemp) {
  let result = parseFloat((targetTemp * (9/5) + 32).toFixed(1));
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
