// BOM
alert('Current page: ' + window.location ); 


var msg = '<h2> browser window </h2> <p> width: ' + window.innerWidth + '<p/>';
msg += '<p>height: ' + window.innerHeight + '</p>';

msg += '<h2> history </h2> <p> item: ' + window.history.length + '</p>';
msg += '<h2> screen </h2> <p> width: ' + window.screen.width + '</p>';
msg += '<p> height: ' + window.screen.height + '</p>';

var el_msg = document.getElementById('info');
el_msg.innerHTML = msg;




// DOM

var msg2 = '<p><b> Page Title: </b> '+ document.title + '<br />';
msg2 += '<b>Page Address: </b>' + document.URL + '<br />';
msg2 += '<b> Last Modified: </b>' + document.lastModified + '</p>';

var el_msg2 = document.getElementById('dom');
el_msg2.innerHTML = msg2;


// global objects
// strings 

var saying = 'Home Sweet Home';
// after value is assigned , the type of varaible becomes corresponding to that one 

var msg3 = '<h3> length </h3> <p>' + saying.length + '</p>';
msg3 += '<h3> Uppercase </h3> <p>' + saying.toUpperCase() + '</p>';
msg3 += '<h3> lowercase </h3> <p>' + saying.toLowerCase() + '</p>';
msg3 += '<h3> Character at index 12 </h3> <p>' + saying.charAt(12) + '</p>';
msg3 += '<h3> first index of \'ee\' </h3> <p>' + saying.indexOf('ee') + '</p>';
msg3 += '<h3> last index of \'e\' </h3> <p>' + saying.lastIndexOf('e') + '</p>';
msg3 += '<h3> Substring: 8-14 </h3> <p>' + saying.substring(8,14) + '</p>';
msg3 += '<h3> replace </h3> <p>' + saying.replace('Home' , 'Candy') + '</p>';

var el_msg3 = document.getElementById('str_info');
el_msg3.innerHTML = msg3;


// numbers 
var o_number = 1252.123456789123456789123456789;
var msg4 = '<h2> original number </h2> <p> ' + o_number + '</p>';
msg4 += '<h2> to fixed deci degits 5</h2> <p> ' + o_number.toFixed(5) + '</p>';
msg4 += '<h2> to fixed digits 5</h2> <p> ' + o_number.toPrecision(5) + '</p>';

var el_msg4 = document.getElementById('num_info');
el_msg4.innerHTML = msg4;



// dates

var t_date = new Date(); // creating an instance of date object 
var yr = t_date.getFullYear();

var el_date = document.getElementById('dates');
el_date.innerHTML = '<p> Copyright &copy; '+ yr +'</p>';

// by default the object created has today's date 
var today = new Date();
var year = today.getFullYear();

// date for specific date and time 
var dob = new Date('Nov 14, 1999 04:39:55');


var diff = today.getTime() - dob.getTime();             // get time returns the unix time in milliseconds 
diff = (diff/31556900000 );                             // milli seconds to years 

var el_date2 = document.getElementById('my_age');
el_date2.textContent = 'I am ' +  Math.floor(diff) + ' yrs old ';

var el_read_dob = document.getElementById('DOB');
el_read_dob.textContent =  dob.toDateString();

var el_read_tob = document.getElementById('TOB');
el_read_tob.textContent =  dob.toTimeString();


var offer_date = new Date('Sep 15, 2019 23:59:59');
var date_today = new Date();

var rem_time = offer_date.getTime() - date_today.getTime();
var days_left = Math.floor(rem_time/(24*60*60*1000) );              // milli seconds  to days 

document.getElementById('test').textContent = 'Offer Valid for another : '+ days_left + ' days ';
