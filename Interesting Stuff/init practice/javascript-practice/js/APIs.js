// geolocation - works with internet connection 

var elMap = document.getElementById('loc');                 // HTML element
var msg = 'Sorry, we were unable to get your location.';    // No location msg


if (Modernizr.geolocation) {                                // Is geo supported
  navigator.geolocation.getCurrentPosition(success, fail);  // Ask for location
  elMap.textContent = 'Checking location...';               // Say checking...
} else {                                                    // Not supported
  elMap.textContent = msg;                                  // Add manual entry
}

function success(position) {                                // Got location
  msg = '<p>Longitude:<br>';                               // Create message
  msg += position.coords.longitude + '</p>';               // Add longitude
  msg += '<p>Latitude:<br>';                               // Create message
  msg += position.coords.latitude + '</p>';                // Add latitude
  elMap.innerHTML = msg;                                    // Show location
}

function fail(msg) {                                        // Not got location
  elMap.textContent = msg;                                  // Show error message
  console.log(msg.code);                                    // Log the error
}



// storing API

if (Modernizr.localstorage) 
{

  var txtUsername = document.getElementById('username'); // Get form elements
  var txtAnswer = document.getElementById('answer');

  txtUsername.value = localStorage.getItem('username');  // Elements populated
  txtAnswer.value = localStorage.getItem('answer');      // by localStorage data

  txtUsername.addEventListener('input', function () {    // Data saved on keyup
                                                        localStorage.setItem('username', txtUsername.value);
                                                    }, false);

  txtAnswer.addEventListener('input', function () 
                                      {      // Data saved on keyup
                                          localStorage.setItem('answer', txtAnswer.value);
                                      }, false);
}

// session storage is used in the same way 

