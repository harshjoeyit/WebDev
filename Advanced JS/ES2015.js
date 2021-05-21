

// ES 2015



// const
// const makes primitive data types immutable
// but 

const arr = [1, 2, 3, 4];
arr.push(5);
// console.log(arr);

const colt = {
      name: 'Colt', 
      age: 12
}
colt.age = 15;
// console.log(colt);

// with objects(and arrays) cannot be const 



// let 
// creates a block level scope (earlier in 
// JS only function level scope and global scope were possible)

var ins = "Ellie";
if(ins === "Ellie") {
      let funFact = "Plays Cello!";
}

// gives error 
// console.log(funFact);


// let vs var
function wish() {
      return msg;
      var msg = "Good Morning";
}
// console.log(wish());

// Above code looks like this actually 

/* 
function wish() {
      // we get undefined - since msg is undefined
      var msg;
      return msg;
      msg = "Good Morning";
}
*/

function wishAgain() {
      return msg;
      let msg = "Goog Morning";
}
// this gives reference error, it is not similar to var, (read TDZ)
// console.log(wishAgain());

// when to use

// for(var i=0; i<5; i++) {
//       setTimeout(function() {
//             console.log(i);
//       }, 1000);
// }
// prints 5- 5times, beacuse the loop already runs 

// for(let i=0; i<5; i++) {
//       setTimeout(function() {
//             console.log(i);
//       }, 1000);
// }
// if we use let each time a new variable is created for that scope 



// template strings 

var fName = "Harshit";
var lName = "Gangwar";
// console.log(`Hello ${fName} ${lName}`);




// arrow functions
// they are not same as functions created using function keyword
// they do not get the keyword this, value of this is of the enclosing context of arrow function
// if arrow function has only one argument then it does not need to put in ()

var add = (a, b) => a+b;
// console.log(add(10, 15));

var newArr = [1, 2, 3].map(value => value*2);
// console.log(newArr);


// double and filter divisible by 3

var doubleAndFilter = function(arr) {
      return arr.map(function(val) {
            return val*2;
      }).filter(function(val) {
            return val % 3 === 0;
      });
}

var niceDoubleAndFilter = arr => arr.map(val => val*2).filter(num => num %3 === 0);

// console.log(doubleAndFilter([3, 5, 2, 1, 9]));
// console.log(niceDoubleAndFilter([3, 5, 2, 1, 9]));


// this same example used in call, bind, apply

var instructor = {
      fName: "Elie", 
      sayHi: function() {
            setTimeout(() => {
                  // this refers to the enclosing context of function i.e. object itself  
                  // console.log("Hello " + this.fName);
            }, 1000);
            // setTimeout is the function of window object so if the arrow function 
            // is not used then this referes to the window object and not instructor object
      }
}

// console.log(instructor.sayHi());

// if the sayHi method is also the arrow function then the enclosing block for 
// setTimeout will become window object

// when not to use arrow functions 
// - as a method inside a object since this would now refer to the window object


var mapFilterAndReduce = function (arr) {
      return arr.map(function(val) {
            return val.firstName;
      }).filter(function(val) {
            return val.length < 5;
      }).reduce(function(acc, next) {
            acc[next] = next.length
            return acc;
      }, {});
}

let niceMapFilterAndReduce = arr => arr.map(val => val.firstName).filter(val => val.length < 5)
      .reduce((acc, next) => {
            acc[next] = next.length
            return acc;
      }, {});

var names = [
      {
            firstName: "Tina"
      }, 
      {
            firstName: "Sam"
      }, 
      {
            firstName: "Billy"
      }, 
      {
            firstName: "Mathhew"
      }
]

// fiilter names that have length < 5 and put 
// them in dectionary with name and length as kwy value pair
// console.log(mapFilterAndReduce(names));

// console.log(niceMapFilterAndReduce(names));


let Student = function(name, age) {
      this.name = name,
      this.age = age,
      this.college = "MNNIT"
}

var ramesh = new Student("Ramesh", 15);
// console.log(ramesh);

let niceStudent = (name, age) => ({ name: name, age: age, college: "MNNIT" })

var suresh = new Student("Suresh", 13);
// console.log(suresh);





// defalut parammeters 

function add(a, b) {
      return a+b;
}
// console.log(add());
// prints NaN

function mul(a=3, b=4) {
      return a*b;
}

// console.log(mul())
// console.log(mul(5));
// console.log(mul(7, 8));



// for of loop 
// can't access an index 
// can only be used on data structures with Symbol.iterator method 
// implemented (not on objects)

a = [3, 4, 3, 1, 2];
for(let num of a) {
      // console.log(num);
}



// Rest operator 

function printArgs(a, b, ...c) {
      // console.log(a);
      // console.log(b);
      // console.log(c);
}

printArgs(1);
printArgs(1, 2, 3);
printArgs(1, 2, 3, 4);


function sumArgs() {
      var total = 0;
      for(var i=0; i<arguments.length; i++) {
            total += arguments[i];
      }
      return total;
}

function anotherSumArgs() {
      // to converts agument object into array
      var argArr = [].slice.call(arguments);
      return argArr.reduce(function(acc, next) {
            return acc + next;
      }, 0);
}

var niceSumArgs = (...args) => args.reduce((acc, next) => acc + next);
// now args is already an array so 
// we dont need  to explicitly convert it, 
// we can simply use reduce on it 

// console.log(sumArgs(1, 2, 3, 4));
// console.log(anotherSumArgs(1, 2, 3, 4));
// console.log(niceSumArgs(1, 2, 3, 4)); 




// Spread operator 

var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = [1, 2 ,3];

a = [...arr1, ...arr2, ...arr3];
// console.log(a);

// Math.max operator does not work on arrays - so we use apply 
// or the spread operator 
// console.log(Math.max(...a));


function sum(a, b, c) {
      return a+b+c;
}

a = [1, 2, 3];
// console.log(sum(...a));



// finding minmum from the array 
function smallest(...args) {
      // first recieve the array as an argument using the
      // Rest operator 
      // Use Spread operator since the max deos not accept the array 
      return Math.min(...args);
}

// console.log(smallest(1, 2, -1, 3));


// concatinating array;
function joinArrays(...args) {
      return args.reduce((acc, next) => acc.concat(next), []);
}
// console.log(joinArrays([1, 2, 3], [3, 4, 5], [1, 2], [1]));






// Object Enhancement

var fName = "Rohit";
var lName = "Mehra";

var person1 = {
      fName: fName, 
      lName: lName
}
// console.log(person1);

// if keys and values are same, then this is a shorthand
var person2 = {
      fName, 
      lName
}
// console.log(person2)


var obj1 = {
      callout: function() {
            return "Hello";
      }
}
// ES2015
var obj2 = {
      callout() {
            return "Hi";
      }
}
// console.log(obj1.callout());
// console.log(obj2.callout());



// Destructuring
// extracting values data storedin arrays and objects



var person = {
      firstName: "Harshit",
      lastName: "Gangwar"
}
// unpack
var {firstName, lastName} = person
// console.log(firstName, lastName);

// our new variable name
var {firstName:first, lastName:last} = person;
// console.log(first, last);


// before ES2015
function displayInfo(obj) {
      return [obj.name, obj.favColor];
}
// destructured object as a parameter 
function niceDisplayInfo({name, favColor}) {
      return [name, favColor];
}

var obj = {name: "Elie", favColor: "Yellow"}
// console.log(displayInfo(obj));
// console.log(niceDisplayInfo(obj));


// Array destructuring

a = [1, 2, 3, 4];
var [a, b, c, d] = a;
// console.log(a, b, c, d);

function returnNums(a, b) {
      return [a, b];
}

[first, second] = returnNums(3, 4);
// console.log(first, second);


// swapping 
function swap(a, b) {
      return [a, b] = [b, a];
}
// console.log(swap(5, 19));


// reversing an array
function reverse(a) {
      for(var i=0; i<a.length/2; i++) {
            a[a[i], a[a.length-i-1]] = [a[a.length-1-i], a[i]];
      }
      return a;
}

a =[1, 2, 3, 4, 5];
// console.log(reverse(a));