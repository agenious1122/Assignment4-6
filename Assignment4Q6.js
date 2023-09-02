"use strict";
// //Q6 - Write a program having an array of numbers 
// //if the number is negative it should remove the negative number 
// //from the array
var array1 = [1, 2, 3, -4, 5, 6, -7, 8, 9, 19, 11, 12, 13, 14];
for (let i = 0; i < array1.length; i++) {
    if (array1[i] < 0) {
        array1.splice(i, 1);
        i--;
    }
}
console.log(array1);
