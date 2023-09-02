function printEvenNumbers(numbers: number[]): void 
{
    for (let i = 0; i < numbers.length; i++) 
    {
      var currentNumber = numbers[i];
      if (currentNumber % 2 === 0) {
        console.log(currentNumber);
      }
    }
  }
  
  // Example usage:
  var numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Even numbers in the array:");
  printEvenNumbers(numberArray);
  