
// exponentiation operator 
// ES2015 
// console.log(Math.pow(3, 4));

// ES2016
// console.log(3**4);

var nums = [1, 2, 3 ,4, 5];
// console.log(nums.includes(3));
// console.log(nums.includes(8));








// ES2017

// making numbers 6 digits by padding prefix 
// first prameter is the total length, second is the char to padd with
// this is helpful when we want strings all of same length but the input might not be the same

var num1 = "234".padStart(6, '0');
var num2 = "56".padStart(6, '0');
// console.log(num1);
// console.log(num2);

// console.log("awesome".padEnd(10, '!'));




// async functions 

// simplify writing async function using promises 
// returns promise


async function first() {
      return "We did it";
}

console.log(first());
first().then(val => console.log(val));

 
// await 
// uses only inside the async functions 
// its like a pause button 

async function getMovieData() {
      console.log("starting!!");
      var movieData = await $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
      console.log("all done!");
      console.log(movieData);
}

// await keyword makes this async function run synchronously



// object async

var movieCollector = {
      data: "titanic", 
      async getMovieData() {
            var movieData = await $.getJSON(`https://omdbapi.com?t=${this.data}&apikey=thewdb`);
            console.log(movieData);
      }
}


// how to handle a rejected promise 

async function getUser(user) {
      try {
            var response = await $.getJSON(`https://api.github.com/users/${user}`);
            console.log(response);
      } catch(err) {
            console.log("User does not exist!");
      }
}

// sequential requests
async function getMoviesSequential() {
      var responseOne = await $.getJSON(`https://omdbapi.com?t=taken&apikey=thewdb`);
      var responseTwo = await $.getJSON(`https://omdbapi.com?t=terminator&apikey=thewdb`);

      console.log(responseOne);
      console.log(responseTwo);
}

// parallel requests 
// MUCH FASTER 
async function getMoviesParallel() {
      var promiseOne = $.getJSON(`https://omdbapi.com?t=taken&apikey=thewdb`);
      var promiseTwo = $.getJSON(`https://omdbapi.com?t=terminator&apikey=thewdb`);

      var responseOne = await promiseOne;
      var responseTwo = await promiseTwo;
      
      console.log(responseOne);
      console.log(responseTwo);
}



// combining Promise.all method with async await 
async function getMovies() {
      var movieList = await Promise.all([
            $.getJSON(`https://omdbapi.com?t=taken&apikey=thewdb`),
            $.getJSON(`https://omdbapi.com?t=troy&apikey=thewdb`)
      ]);

      console.log(movieList[0]);
      console.log(movieList[1]);
}




// Object Rest 

// we are destructuring the  objects 
var instructor = {first: "Elie", last: "Schoppick", job: "Inst.", siblings: 3};
var {first, last,...data} = instructor;
console.log(first);
console.log(last);
console.log(data);


// Object Spread Operator 
// spreads object in key value pair 

// copying and then overwriting
var instructor2 = {...instructor, first: "Tim", last: "Garcia"};
console.log(instructor2);



var defaults = {job: "Instructor", ownsCat: true, ownsDog: true};
var matt = {...defaults, ownsCat: false};
var colt = {...defaults, ownsDog: false}

console.log(matt);
console.log(colt);