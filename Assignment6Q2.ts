//2.	Given an array of numbers [1, 2, 3, 4, 5], use the map method to create 
//a new array where each number is multiplied by 2.

var numbers = [1, 2, 3, 4, 5];

var multipliedNumbers = numbers.map((num) => num * 2);

console.log('Original array:', numbers);
console.log('New array with each number multiplied by 2:', multipliedNumbers);