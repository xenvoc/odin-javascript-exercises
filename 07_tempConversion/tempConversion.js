const convertToCelsius = function(temp) {
  if (!Number.isFinite(temp)) return 'ERROR';
  return +((temp - 32) * 5/9).toFixed(1); 

};

const convertToFahrenheit = function(temp) {
  if (!Number.isFinite(temp)) return 'ERROR';
  return +((temp * 1.8) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
