"use strict";
//5.	Given an array of temperatures in Celsius [0, 10, 20, 30, 40], 
//use the map method to create a new array where each temperature is 
//converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
var celsiusTemperatures = [0, 10, 20, 37, 40];
var fahrenheitTemperatures = celsiusTemperatures.map((celsius) => (celsius * 9 / 5) + 32);
console.log('Celsius Temperatures:', celsiusTemperatures);
console.log('Fahrenheit Temperatures:', fahrenheitTemperatures);
