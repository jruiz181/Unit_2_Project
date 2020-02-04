"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: jeremiah ruiz   
   Date:   2-04-20
   
   Filename: hg_report.js
	
*/
var gameReport = "<h1>" + itemTitle + "</h1><h2>By: " + itemManufacturer + "</h2><img src='hg_" + itemID + ".png' alt='id' id='gameImg' />"
gameReport += "<table><tr><th>Product ID</th><td>id</td></tr><tr><th>List Price</th><td>" + itemPrice + "</td></tr>"
gameReport+= "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr><tr>ESRB rating</th><td>" + itemESRB + "</td></tr>"
gameReport += "<tr><th>Condition</th><td>" + itemCondition + "</td></tr><tr><th>Release</th><td>"+ itemRelease+ "</td></tr></table>" + itemSummary

document.getElementsByTagName("article")[0].innerHTML = gameReport;
var ratingsSum = 0;

ratingsCount = ratings.length;
for( var i = 0; i< ratings.length; i++){
   ratingsSums += ratings[i];
}
var ratingsAvg = ratingsSum/ratings
ratingReport = "<h1>Customer Reviews</h1><h2>" + ratingAvg + "out of 5 stars (" + ratingsCount + " review )</h2>"