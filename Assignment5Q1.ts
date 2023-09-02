function sumOfFirstNEvenNumbers(n:number):number 
{
  var sum = 0;
  for (let i = 1; i <= n; i++) 
  {
        var evenNumber = i * 2;
    sum += evenNumber;
  }

  return sum;
}


var n = 5; 
var result = sumOfFirstNEvenNumbers(n);
console.log("Sum of the first",n,"even numbers is:",result);