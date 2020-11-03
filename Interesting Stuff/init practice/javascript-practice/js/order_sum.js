
// order summary

var today = new Date();
var hourNow = today.getHours();
var greeting;

if ( hourNow > 18 )
{
    greeting = 'Good Evening ';
}
else if ( hourNow > 12 )
{
    greeting = 'Good Afernoon ';
}
else
{
    greeting = 'Good Morning ';
}

var elwish = document.getElementById('wish');
elwish.textContent = greeting;


var cust_name = 'Molly';
var elgreet = document.getElementById('name');
elgreet.textContent = cust_name;


var order_name = 'Montague House';
var elon = document.getElementById('order_piece');
elon.textContent = order_name;


var rate = 5;
var total_tiles = order_name.length;
var eltt = document.getElementById('t_tiles');
eltt.textContent = total_tiles;


var sub_total = rate * total_tiles;
var elst = document.getElementById('s_total');
elst.textContent = '$ ' + sub_total; 


var shipping_cost = 7;
var elsh = document.getElementById('shipp');
elsh.textContent = '$ ' + shipping_cost; 


var grand_total = sub_total + shipping_cost;
var elgt = document.getElementById('grand_t');
elgt.textContent = '$ ' + grand_total; 
