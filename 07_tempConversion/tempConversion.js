const convertToCelsius = function (number) {
  let output;
  output = +((number - 32) * 5 / 9).toFixed(1);
  return output;
};

const convertToFahrenheit = function (number) {
  let output;
  output = +(number * 9 / 5 + 32).toFixed(1);
  return output;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
