
// ES5


// function Student(name, age) {
//       this.name = name;
//       this.age = age;
// }

// // placing methods on the objects created using above constructor function 
// Student.prototype.sayHello = function() {
//       return "Hello " + this.name;
// }

// // adding properties onto the class 
// Student.isStudent = function(obj) {
//       return obj.constructor === Student;
// }

// // creating instance
// var elie = new Student("Elie", 23);
// console.log(elie.sayHello());
// console.log(Student.isStudent(elie));



// ES2015

// class 
// creates constant that cannot be redeclared

// class Student {
//       constructor(name, age) {
//             this.name = name;
//             this.age = age;
//       }
//       // no function keyword needed
//       // under the hood it is placing this method on prototype
//       sayHello() {
//             return "Hello " + this.name;
//       }
//       // adding a method onto the class 
//       static isStudent(obj) {
//             return obj.constructor === Student;
//       }
// }

// var elie = new Student("Elie", 23);       
// // if new is not  used with class declaration it gives a TypeError
// console.log(elie.sayHello());
// console.log(Student.isStudent(elie));
// console.log(Student.isStudent([]));




//  Inheritence 

// in ES5

// this is how Student class inherits Person
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// in ES2015

// use extends keywords just as in Java 

// class Person {
//       constructor(name, age) {
//             this.name = name;
//             this.age = age;
//       }

//       sayHi() {
//             return `Hello ${this.name}`;
//       }
// }

// class Student extends Person {
// }

// var tim = new Student("tim", 23);
// console.log(tim);
// console.log(tim.sayHi());




// removing code duplication 

// ES5

// function Vehicle(brand, model) {
//       this.brand = brand;
//       this.model = model;
// }

// function Bike(brand, model) {
//       Vehicle.apply(this, arguments);
// }


// ES2015

class Vehicle {
      constructor(brand, model) {
            this.brand = brand;
            this.model = model;
      }
      start() {
            return "Vroom Vroom ... ";
      }
}

class Bike extends Vehicle {
      constructor(brand, model) {
            super(...arguments);
      }
}

var ninja = new Bike("Kawasaki", "Ninja");
// console.log(ninja);
// console.log(ninja.start());




// Maps (hash maps)

// before ES12015 objects with jey value pairs we used as maps


var firstMap = new Map;

firstMap.set(1, 'Elie');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');
// key can be a object or an array 
var arrKey = [], objKey = {};
firstMap.set(objKey, 'an object');
firstMap.set(arrKey, 'array');

// console.log(firstMap);

// has
// console.log(firstMap.has('nice'));

// size
// console.log(firstMap.size);

// getting values 
// console.log(firstMap.get('nice'));
// console.log(firstMap.get(objKey));

// getting array of keys
var keysArr = Array.from(firstMap.keys());
// console.log(keysArr);

// searching in map using values
var findValue = 'an object';
for (let val of firstMap.values()) {
      if (val == findValue) {
            // console.log('found');
      }
}


// iterating over a map 
// firstMap.forEach((value, key, map) => {
//       console.log(key,'=>', value);
// });


// weakmaps
// all keys must be objects 
// can not be iterated 




// Sets 
var firstSet = new Set();
firstSet.add(3);
firstSet.add(true);
firstSet.add({ name: "Harshit" });
firstSet.add([]);

// console.log(firstSet);
// size 
// console.log(firstSet.size);

// has 
// console.log(firstSet.has([]));

firstSet.delete(3);

keysArr = Array.from(firstSet.keys());
// console.log(keysArr);

// iterate 
// firstSet.forEach((key, set) => {
//       console.log(key);
// });



// Weaksets - similar to weak maps 




// exercises 

function uniqueValues(arr) {
      return new Set(arr).size;
}

console.log(uniqueValues([1, 1, 2, 1, 3]));




// promises 

function displayRandomTime() {
      return new Promise(function (resolve, reject) {
            setTimeout(function () {
                  if (Math.random() > .5) {
                        resolve('Resolved!');
                  } else {
                        reject('Rejected!');
                  }
            }, 1000);
      });
}

// displayRandomTime()
//       .then(function (value) {
//             console.log(value);
//       })
//       .catch(function (error) {
//             console.log(error);
//       });


// READ ABOUT Promise.all() function 
// it is really pick data from multiple apis using a single call 





// genrators 

// special function which can pause execution and resume at any time 
// created using *
// when invoked a genreator object is returned to us with the keys and values and done


function* pauseAndReturnValues(num) {
      for(let i=0; i<num; i++) {
            yield i;
      }
}

var gen = pauseAndReturnValues(5);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// iterating 
for(val of pauseAndReturnValues(3)) {
      console.log(val);
}


// using genrators with asynchronous code 
// function* getMovieData(movieName) {
//       console.log('starting');
//       yield $.getJSON(`https://omdbapi.com?t=${movieName}&apikwy=thewdb`);
//       console.log('ending');
// }

// var movieGetter = getMovieData('titanic');
// movieGetter.next().value.then(val => console.log(val));





// Object.assign

// copying objects
// not a deep copy 


var obj = {name: "Elie"}
// refernce created not a copy
var obj2 = obj;
obj2.name = "Tim";
// console.log(obj);

var obj3 = Object.assign({}, obj2);
obj3.name = "Colt";
console.log(obj2);
console.log(obj3);



// not a deep copy

var vehicle1 = {type: 'Cars', models: ['Jaguar', 'Lexus', 'Volvo']};
var vehicle2 = Object.assign({}, vehicle1);
vehicle2.type = 'Bikes';
// not a deep copy so array inside is still a refernce 
vehicle2.models.push('Yamaha');

console.log(vehicle1);
console.log(vehicle2);




// Array.from 

// array like objects are the object 
// that we get back when selecting DOM elements 
// using tag name, class names, queryselectorALL


// var divs = document.getElementsByTagName('div');

// ES5 
// var divsArr = [].slice().call(divs);

// ES2015
// divsArr = Arr.from(divs);

var set = new Set([1, 2, 3, 4]);
var setArr = Array.from(set);
console.log(setArr);






// find

var people = [{name: 'Harshit'}, {name: 'Meena'}, {name: 'Kalyug'}];

// if we find then then object is returned
// else undefined is returned 
var res = people.find(function(val) {
      return val.name === "Harshit";
}); 
console.log(res);


// findIndex

// if not found -1 is returned
res = people.findIndex(function(val) {
      return val.name === "Kalyug";
}); 
console.log(res);


// finding a sbstring in a string

var str = "once upon a time there lived a vicar";

// ES5
console.log(str.indexOf("lived"));
console.log(str.indexOf("king"));

// ES2015
console.log(str.includes("lived"));



// Number.iFinite, Number.isInteger

