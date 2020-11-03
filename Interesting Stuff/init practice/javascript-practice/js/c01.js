var today = new Date();

var hourNow = today.getHours();

var greetings;

if (hourNow > 18)
    greeting = 'Good Evening ';

else if (hourNow > 12) 
    greeting = 'Good Afernoon ';

else 
    greeting = 'Good Morning ';
    
// content appers where the script is called 
document.write('<h3>' + greeting + '</h3>');