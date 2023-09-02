"use strict";
//3.	Given an array of strings ["apple", "banana", "cherry", "date", "grape"], 
//use the filter method to create a new array containing only the fruits with more 
//than 5 characters.
var fruits = ["apple", "banana", "cherry", "date", "grape"];
var longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log('Original array:', fruits);
console.log('New array with fruits having more than 5 characters:', longFruits);
