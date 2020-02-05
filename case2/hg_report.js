"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: jeremiah ruiz   
   Date:   2-04-20
   
   Filename: hg_report.js
	
*/
// all of this one variable creates a table with certain variable values
var gameReport = "<h1>" + itemTitle + "</h1><h2>By: " + itemManufacturer + "</h2><img src='hg_" + itemID + ".png' alt='id' id='gameImg' />"
gameReport += "<table><tr><th>Product ID</th><td>id</td></tr><tr><th>List Price</th><td>" + itemPrice + "</td></tr>"
gameReport+= "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr><tr>ESRB rating</th><td>" + itemESRB + "</td></tr>"
gameReport += "<tr><th>Condition</th><td>" + itemCondition + "</td></tr><tr><th>Release</th><td>"+ itemRelease+ "</td></tr></table>" + itemSummary

//sets the html in the document to say the game reprt variable
document.getElementsByTagName("article")[0].innerHTML = gameReport;
var ratingsSum = 0;
//count s now equal to ratings 
var ratingsCount = ratings.length;
//it loops to find the sum of all ratings
for( var i = 0; i< ratings.length; i++){
   var ratingsSums = ratings[i];
}
//avg is sum divided by the length
var ratingsAvg = ratingsSum/ratings.length
//inputs more variable values into the table 
var ratingReport = "<h1>Customer Reviews</h1><h2>" + ratingsAvg + "out of 5 stars (" + ratingsCount + " review )</h2>"
// loops and then if less than three it will add rating titles
for(var i = 0; i< 3; i++){
   ratingReport += "<div class='review'><h1>" + ratingTitles[i] + "</h1><table><tr><th>by</th><td>" + ratingAuthors[i] + "</td></tr><tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr><tr><th>rating</th><td>"
   // loop that adds image to all araays
   for(var j = 1; j < ratings[i]; j++){
      ratingReport += "<img src='hg_star.png' />"
   }
   // adds final summary and then displays it in the HTML
   ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>"
   document.getElementsByTagName("aside")[0].innerHTML = ratingReport;
}
// document.getElementsByTagName("aside")[0].innerHTML = ratingReport;