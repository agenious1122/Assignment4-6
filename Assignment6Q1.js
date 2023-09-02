"use strict";
//Q Node.1.	Write a program that uses filter to remove all negative numbers from an 
//array of numbers
function removeNegativeNumbers(arr) {
    var filteredArray = arr.filter((num) => num >= 0);
    return filteredArray;
}
var numbers = [10, -5, 8, -20, 3, 15];
var positiveNumbers = removeNegativeNumbers(numbers);
console.log('Original array:', numbers);
console.log('Array with negative numbers removed:', positiveNumbers);
