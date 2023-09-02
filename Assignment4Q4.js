"use strict";
//Q No.4.	Write a program that uses a while loop to 
// print the first 10 even numbers. 
let numbers = 1;
let evenNumbers = 0;
while (evenNumbers < 10) {
    if (numbers % 2 === 0) {
        console.log(numbers);
        evenNumbers++;
    }
    numbers++;
}
