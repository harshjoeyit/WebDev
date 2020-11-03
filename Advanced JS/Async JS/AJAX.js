
// XMLHttpRequest

// var XHR = new XMLHttpRequest();
// XHR.onreadystatechange = function () {
//       console.log("ready state: " + XHR.readyState)
//       if (XHR.readyState == 4) {
//             if (XHR.status == 200) {
//                   console.log(this.responseText);
//             } else {
//                   console.log("There was a problem!!");
//             }
//       }
// };
// XHR.open("GET", "https://api.github.com/zen");
// XHR.send();


// using fetch

// var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
// fetch(url)
//       .then(function (response) {
//             console.log(response);
//             return response.json();
//       })
//       .then(function (data) {
//             var currency = "USD";
//             console.log("Bitcoin price: " + data.bpi[currency].rate + " " + currency);
//       })
//       .catch(function (error) {
//             console.log(error);
//       });


// var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
// fetch(url)
//       .then(checkResponse)
//       .then(function(response) {
//             console.log("All Ok!");
//             console.log(response);
//       })
//       .catch(function(error) {
//             // works on internet issues or credentials issues
//             console.log(error);
//             // do something so the user knows 
//       });


// function checkResponse(response) {
//       // ok(true) - when status code = 200, else false
//       if (!response.ok) {
//             // throw error
//             throw Error(response.status);       // could be 404 or 503 or anything else
//             // jumps directly to catch
//       }
//       return response;
// }


