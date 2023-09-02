//Q No.5.	Create a function that takes a positive integer as 
//parameter and uses a while loop to calculate and return the 
//factorial of that number.

function factorial(num:number) 
{
    var num1:number=1
    while (num>0) 
    {
        num1 = num1*num
        num--
    }
    return num1;
}
var newFactorial:number=factorial(5)
console.log(newFactorial)
