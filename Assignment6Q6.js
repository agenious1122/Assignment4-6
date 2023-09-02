"use strict";
//6.	Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and 
//filter methods together to create a new array containing the doubled values 
//of odd numbers.
var numbers = [3, 6, 9, 12, 15, 18];
var oddNumbers = numbers.filter((num) => num % 2 !== 0);
var doubledOddNumbers = oddNumbers.map((num) => num * 2);
console.log('Original array:', numbers);
console.log('Doubled values of odd numbers:', doubledOddNumbers);
