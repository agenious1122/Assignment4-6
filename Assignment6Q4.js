"use strict";
//4.	Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
//use the map and filter methods together to create a new array containing
// the squares of even numbers.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = numbers.filter((num) => num % 2 === 0);
var squaresOfEvenNumbers = evenNumbers.map((num) => num * num);
console.log('Original array:', numbers);
console.log('Squares of even numbers:', squaresOfEvenNumbers);
