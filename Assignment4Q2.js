"use strict";
// Q No.2.	Implement a simple shopping cart program using an array. 
// Create functions to add items, remove items,and update quantities
//  using the splice method. Print the cart's contents after each operation
var shoppingCart = ["Egg", "Bread", "Milk", "Jam", "Biscuits"];
function changeInCart(index1, index2, item) {
    shoppingCart.splice(index1, index2, item);
    return shoppingCart;
}
var updatedCart = changeInCart(shoppingCart.length, 0, "Baqarkhani");
console.log(updatedCart);
console.log("-----------------------------------------------------------");
updatedCart.splice(updatedCart.length - 1, 1);
console.log(updatedCart);
console.log("-----------------------------------------------------------");
