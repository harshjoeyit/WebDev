// var answer = confirm("Are sure you want to delete this?");
// console.log(answer);


// var arr = [2, 2, 1, 3, 4];
// var index = arr.findIndex(function (value) {
//       return value%2 == 1;
// });
// console.log(index);


// var num = 0;
// var intervalId = setInterval(function() {
//       num++;
//       console.log("num: " + num);
//       if(num === 5) {
//             clearInterval(intervalId);
//       }
// }, 1000);


// function countDown(seconds) {
//       var intervalId = setInterval(function() {
//             seconds--;
//             if(seconds === 0) {
//                   clearInterval(intervalId);
//                   console.log("Wake Up!");
//             } else {
//                   console.log(seconds);
//             }
//       }, 1000);
// }
// countDown(10);


// function loop(n) {
//       for(var i=0; i<n; i++) {
//             var x = i*2;
//       }
//       console.log("done with the loop")
// }
// setTimeout(function () {
//       console.log("Callback was placed on the queue!");
// }, 0);
// // 0 does not mean that the function will get invoked immediatly 
// // it means the the callback of settimeout will be queued immediately
// // it will only execute when the stack is empty and when event loop pushes it onto the stack
// loop(1000000000);


// Promises


// var p1 = new Promise(function (resolve, reject) {
//       setTimeout(function () {
//             var num = Math.random();
//             if (num < 0.5) {
//                   resolve(num);
//             } else {
//                   reject(num);
//             }
//       }, 4000);
// });

// p1.then(function (data) {
//       console.log("Promise p1 resolved with data: " + data);
// }).catch(function (data) {
//       console.log("Promise rejected with data: " + data);
// });




// async code - nested callbacks
// var counter = 0;
// setTimeout(function () {
//       ++counter;
//       // 1 sec later
//       console.log("counter: " + counter);
//       setTimeout(function() {
//             ++counter;
//             // 1 + 2 sec later
//             console.log("counter: " + counter);
//             setTimeout(function() {
//                   ++counter;
//                   // 1 + 2 + 3 sec later
//                   console.log("counter: " + counter);
//             }, 3000);
//       }, 2000);  
// }, 1000);


// refactoring into Promises
// var counter = 0;
// function incCounter() {
//       counter++;
//       console.log("counter: " + counter);
// }

// function runLater(callback, timeInMs) {
//       var p = new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                   callback();
//                   resolve();
//             }, timeInMs);
//       });
//       // returns a promise
//       return p;
// }

// runLater(incCounter, 1000).then(function () {
//       return runLater(incCounter, 2000);
// }).then(function () {
//       return runLater(incCounter, 3000);
// }).then(function () {
//       // console.log("finished!");
// });





















