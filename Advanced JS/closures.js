// closures 




// // not a closurec
// function outer() {
//       var data = "outer function";
//       return function inner() {
//             return "inner function";
//       }
// }

// console.log(outer());
// console.log(outer()());


// // closure 
// function outer() {
//       var data = "outer function";
//       return function inner() {
//             var inner_data = "inner function";
//             return data + " " + inner_data;
//       }
// }

// console.log(outer());
// console.log(outer()());

/*
closure only exist when ans inner function 
makes use of variables defined in an outer function 
that has returned. 
If the inner function does not make use of vairables in the outer function 
, all we have is a nested function

closures dont remember all the variables in teh outer functon 
just those that they need

*/



// function counter(start) {
//       // acts as a private variable 
//       var count = start;
//       return function inner() {
//             count += 1;
//             return count;
//       }
// }

// // starts the counter from the given arg
// var counter1 = counter(0);
// console.log(counter1());
// console.log(counter1());

// var counter2 = counter(20);
// console.log(counter2());
// console.log(counter2());

// console.log(counter1());




// function classRoom() {
//       var instructors = ["Ellie", "Colt"];
//       return {
//             getInstructors: function() {
//                   // insetead of returning the array iteslf we return the copy 
//                   // since we donot want anyone modify our array except using the defined function
//                   return instructors.slice();
//             }, 
//             addInstructors: function(_new) {
//                   instructors.push(_new);
//                   return instructors.slice();
//             } 
//       }
// }

// var first = classRoom();
// console.log(first.getInstructors());
// console.log(first.addInstructors("Tim")); 

// var second = classRoom();
// console.log(second.getInstructors());
// console.log(second.addInstructors("Steele")); 
// console.log(second.addInstructors("Adam")); 

// console.log(second.getInstructors().pop());
// // last value is poped from the copy of the array returned
// // the original remains unchanged 
// console.log(second.getInstructors());



// function specialMultiply(a, b) {
//       // checking number of arguments
//       if(arguments.length === 1) {
//             return function(b) {
//                   return a*b;
//             }
//       }
//       return a*b;
// }

// console.log(specialMultiply(2, 5));
// var mul = specialMultiply(3);
// console.log(mul(2) + " " + mul(10));









// this 




// anytime a function is called, two keywords are defined for that function
// 1. this        2. aguments 
// There are four rules which define the value of this 


// 1. Global Context
// when 'this' is not declared in any object 
// 'this' refers to window


// console.log(this);

// var instructor = "Ellie";
// // all globla objects are in the window object
// console.log(window.instructor);     
// // same as instructor 

// function whatIsThis() {
//       // this still not inside any object except the window object
//       return this;
// }
// console.log(whatIsThis());

// function variablesInThis() {
//       // if attach a property of the this
//       // creates a global object inside a function 
//       // bad practice    
//       this.person = "Matt";
//       // creating variable without using var 
//       // creats global object 
//       // bad practice
//       dog = "Rusty";
//       // cat is defined using var keyword
//       // so it gives refernce error outside the function 
//       var cat = "Tinkle";
// }

// variablesInThis();
// console.log(person);
// console.log(dog);
// // console.log(cat);
// // gives error

// // one way to get aroud this problem is 
// var bike;
// function nameBike() {
//       bike = "Kawasaki Ninja";
// }
// nameBike();
// console.log(bike);




// 2. Implicit/Object Binding

// var person = {
//       firstName:"Ellie",
//       sayHi: function() {
//             // function run here is responsible for this -> person 
//             return "Hi " + this.firstName;
//       },
//       determineContext: function() {
//             return this === person;
//       }
// }

// console.log(person.sayHi());
// console.log(person.determineContext());



// var person = {
//       firstName: "Matt",
//       determineContext: this
// }
// // Since no function is run here that makes this->person,
// // so this -> window 
// console.log(person.determineContext);



// var person = {
//       firstName: "Harshit",
//       sayHi: function() {
//             return "Hi " + this.firstName;
//       },
//       determineContext: function() {
//             return this === person;
//       }, 
//       dog: {
//             sayHello: function() {
//                   return "Hello " + this.firstName;
//             },
//             determineContext: function() {
//                   return this === person;
//             }
//       }
// }

// console.log(person.sayHi());
// console.log(person.determineContext());
// // this inside dog - refers to dog
// // dog does not have a property - firstName - so undefined
// console.log(person.dog.sayHello());
// // this === dog
// console.log(person.dog.determineContext());





// 3. Explicit Binding

// we can explicitly choose the context of this
// Call, Apply, Bind - can only be used on functions
// we can set the value of this explicitly as the first arg of these methods 

// console.log(person.dog.sayHello.call(person));
// console.log(person.determineContext.call(person));

// Notice that we are not calling teh sayHello and deteermineContext methods
// we are just attaching call to them




// // preventing code duplication 
// var colt = {
//       firstName: "Colt",
//       sayHi: function() {
//             return "Hi " + this.firstName;
//       }
// }
// var elie = {
//       firstName: "Elie"
// }
// console.log(colt.sayHi());
// // specifying the thisArg in call = elie
// console.log(colt.sayHi.call(elie));




// // much better
// function sayHi() {
//       return "Hello " + this.firstName;
// }
// var colt = {
//       firstName: "Colt"
// }
// var elie = {
//       firstName: "Elie"
// }
// var matt = {
//       firstName: "Matt"
// }
// console.log(sayHi.call(colt));
// console.log(sayHi.call(elie));
// console.log(sayHi.call(matt));




// apply


// function addNumbers(a, b, c, d) {
//       return this.firstName + " justCalculated " + (a+b+c+d);
// }
// console.log(addNumbers.call(elie, 1, 2, 3, 4));
// console.log(addNumbers.apply(colt, [1, 2, 3, 4]));


// other use cases of apply 

// var nums = [5, 7, 1, 4, 2];
// console.log(Math.max(1, 2, 4, 1, 3));     // ok 
// console.log(Math.max(nums));              // not ok
// console.log(Math.max.apply(this, nums));  // ok


// function sum(a, b, c) {
//       return (a+b+c);
// }
// var values = [4, 5, 2];
// console.log(sum(values));                 // not ok
// console.log(sum.apply(this, values));     // ok





// bind

// one case when we use bind is when we do not know all the args at that poin of time

// returns function with this (inside the function set to value passed as arg)
// var elieCalc = addNumbers.bind(elie, 1, 2, 3);
// console.log(elieCalc(4));


// other use cases include setting the this value in the function and later use that function 
// async function 

// var colt = {
//       firstName: "Colt",
//       sayHi: function() {
//             setTimeout(function() {
//                   // setTimeout is a method on the window object
//                   // since setTimeout is invoked at a later point of time
//                   // the context in which callback is called is window and not colt
//                   console.log("Hi " + this.firstName);
//             }.bind(this), 3000);
//             // this here is in sayHi method of colt
//             // this -> colt
//       }
// }

// console.log(colt.sayHi())


// function sumEvenArguments() {
//       // making an array out of the arguments 
//       var newArgs = [].slice.call(arguments);
//       return newArgs.reduce(function (acc, next) {
//             if(next % 2 === 0) {
//                   return acc + next;
//             }
//             return acc;
//       }, 0);
// }
// console.log(sumEvenArguments(1, 2, 3, 4, 5, 2));


// var colt = {
//       firstName: "Colt"
// }
// var matt = {
//       firstName: "Matt"
// }
// function wish(msg) {
//       return msg + " " + this.firstName;
// }
// function once(wish, thisArg) {
//       return function () {
//             return wish.apply(thisArg, arguments);
//       }
// }
// var callOnce = once(wish, matt);
// console.log(callOnce("Happy Birthday!"));
// console.log(callOnce("Gd mrng"));

// callOnce = once(wish, colt);
// console.log(callOnce("Good Night!"));



// function fn() {
//       return ("name: " + this.firstName + " " + [].slice.call(arguments));
// }
// function details(fn, thisArg) {
//        // we want all the arguments except the first 2
//       var outerArgs = [].slice.call(arguments, 2);
//       return function() {
//             var innerArgs = [].slice.call(arguments);
//             var allArgs = outerArgs.concat(innerArgs);
//             return fn.apply(thisArg, allArgs);
//       }
// }
// var func = details(fn, colt, "Places");
// console.log(func("Library", "Park"));

// func = details(fn, matt, "Movies");
// console.log(func("Loner", "Black Swan"));





// 4. The new keyword

// function Person(firstName, lastName) {
//       // this refers to the object created with new keyword
//       this.firstName = firstName;
//       this.lastName = lastName;
//       // an implicit 'this' is returned as a refrence to the object
// }
// var elie = new Person("Elie", "Schmidt");
// var matt = new Person("Matt", "Blanc");