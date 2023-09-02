// Q No.1.	Create a function that takes an array, an index, 
// and a value as parameters. Inside the function, use the 
// splice method to insert the value at the specified index in 
// the array. Return the modified array.

let studeNames:string[]=["Adnan","Asif","Ghani","Mani"]
function takeValueInarray(index1:number,index2:number,studentName:string)
{
    studeNames.splice(index1,index2,studentName)
    return studeNames
}

var newArray=takeValueInarray(2,0,"Sabri")
console.log(newArray)