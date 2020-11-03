
var price; 
var quantity; 
var total; 

price = 5; 
quantity = 14; 
total = price*quantity; 

var el = document.getElementById('total_cost');  //this script finds the id and then rplaces its content by the defined value
el.textContent = '$'+ total;






var greetings = 'HELLO ';
var cust_name = 'Molly';

var welcomeMessage = greetings + cust_name + '!' ;

var elgreet = document.getElementById('greetings');
elgreet.textContent = welcomeMessage;







var message;
var title;
message = 'flat 30% off';
title = 'special offers';

var elNote = document.getElementById('note');
elNote.textContent = message;
var elTitle = document.getElementById('title');
elTitle.textContent = title;






var inStock;
var shipping;
inStock = true;
shipping = false;

var elStock = document.getElementById('stock');
elStock.className = inStock;
var elShip = document.getElementById('shipping');
elShip.className = shipping;






var colors = [ "white","black","cyan" ]; 

colors.sort();

var numColors; 
numColors = colors.length;
document.getElementById('bgcolor').textContent = colors[1] ;

