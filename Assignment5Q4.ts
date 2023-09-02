// Q No.4.	Write a program that defines a function to calculate the area of a circle. 
// The function should take the radius as input and return the calculated area.

function calculateCircleArea(radius: number): number 
{
    var area = Math.PI * Math.pow(radius, 2);
    return area;
  }
  
  
  var radius = 4; 
  var area = calculateCircleArea(radius);
  console.log("The area of the circle with radius", radius, "is:", area);
  