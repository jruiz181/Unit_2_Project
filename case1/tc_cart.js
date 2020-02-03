"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: jeremiah ruiz
   Date:   2-03-20
   
   Filename: tc_cart.js
	
*/
// sets ordertotal to 0 and then makes the cartHTML a table
var orderTotal = 0;
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>price</th><th>Qty</th><th>Total</th></tr>"

// this loop continues to add the arrays set in the other file to get a total cost of th cart
// and also keeps making the table including pngs and adds captions and tds.
for(var i = 0; i < item.length; i++){
   cartHTML += "<tr><td><img src='tc_"+ item[i] + ".png' alt='item' /></td>"

   cartHTML+= "<td>"+ itemDescription[i] + "</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td>"

   var itemCost= itemPrice[i]* itemQty[i];
   cartHTML += "<td>$" + itemCost + "</td></tr>"
   orderTotal += itemCost 
}
// ends table
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>"
// displays grand total
document.getElementById("cart").innerHTML = cartHTML;