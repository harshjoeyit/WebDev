// OOP


// what all new kwyword does
/*
1. creates an empty Object
2. sets keyword this to be that empty Object
3. add the implicit return this at the end of the constructor function
4. creates a link (ehich we can acces as __proto__) between the object
   created and the prototype property of the constructor function
*/


// preventing code duplication using call/apply
// function Car(make, model, year) {
//       this.make = make;
//       this.model = model;
//       this.year = year;
//       this.numWheels = 4;
// }
// function Bike(make, model, year) {
//       Car.call(this, make, model, year);
//       this.numWheels = 2;
// }
// function Bike(make, model, year) {
//       Car.apply(this, [make, model, year]);
//       this.numWheels = 2;
// }
// function Bike() {
//       // using apply to explicitly changing this
//       Car.apply(this, arguments);
//       this.numWheels = 2;
// }

// var c1 = new Car("Porsche", "911", 2015);
// var b1 = new Bike("Ducati", "P142", 2016);



// function Person(name) {
//       this.name = name;
// }
// var elie = new Person("Elie");
// var colt = new Person("Colt");

// console.log(elie.__proto__ === Person.prototype);
// console.log(colt.__proto__ === Person.prototype);
// console.log(Person.prototype.constructor === Person);
// all true

// adding a property to the prototype of Person
// Person.prototype.isInstructor = true;

// console.log(elie.isInstructor);
// console.log(colt.isInstructor); 
// how are we able to access the properties on the prototype 
// because of __proto__


// Person.prototype.sayHi = function () { 
//       return "Hi " + this.name;
// }
// console.log(colt.sayHi());
// console.log(elie.sayHi());





// function Vehicle(make, model, year) {
//       this.make = make;
//       this.model = model;
//       this.year = year;
//       this.isRunning = false;
// }
// Vehicle.prototype.turnOn = function () {
//       this.isRunning = true;
// }
// Vehicle.prototype.turnOff = function () {
//       this.isRunning = false;
// }
// Vehicle.prototype.honk = function() {
//       if (this.isRunning) {
//             return "beep beep";
//       }
// }

// var car = new Vehicle("Mercedes", "S-Class", 2015);
// car.turnOn();
// console.log(car.isRunning);
// console.log(car.honk());




// function Person (firstName, lastName, favColor, favNumber) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.favColor = favColor;
//       this.favNumber = favNumber;
//       this.family = [];
// }
// Person.prototype.fullName = function() {
//       return (this.firstName + " " + this.lastName);
// }
// // adding the members in the family
// Person.prototype.addToFamily = function (newMember) {
//       // check if the member is already in the family and the new_member is constructed by Person
//       if(this.family.indexOf(newMember) === -1 && newMember instanceof Person) {
//             this.family.push(newMember);
//       }
//       return this.family.length;
// }

// var colt = new Person("Colt", "Steele", "Red", 123);
// var matt = new Person("Matt", "Schmidt", "Teal", 2);
// var lisa = new Person("Lisa", "Cuthbert", "Azure", 1);
// console.log(colt.fullName());
// console.log(colt.addToFamily(matt));
// console.log(colt.addToFamily(lisa));
// console.log(colt.family);



// // writing our map function to Array prototype
// Array.prototype.map = function (callback) {
//       var newArr = [];
//       for (var i = 0; i < this.length; i++) {
//             newArr.push(callback(this[i], i, this));
//       }
//       return newArr;
// }

// // adding reverse methold to String prototype
// String.prototype.reverse = function() {
//       var newStr = '';
//       for (var i = this.length-1; i>=0; i--) {
//             newStr += this[i];
//       }
//       return newStr;
// }

// console.log("kelly".reverse());




// Inheritence 
// we actuall pass the prototype property from one constructor to another
// since all the methods live in the prototype


// function Person (firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
// }
// Person.prototype.sayHi = function () {
//       return "Hello " + this.firstName + " " + this.lastName;
// }
// function Student (firstName, lastName) {
//       // using apply to prevent code duplication
//       return Person.apply(this, arguments);
// }
// // lets inherit 
// Student.prototype = Person.prototype;

// var elie = new Student('Elie', 'Schmidt');
// console.log(elie.sayHi());                      // seems good enough

// // lets add property to prototype of student

// Student.prototype.status = "I am a student";

// // This is not what we want - our person protype was modified by student protype 
// console.log(Person.prototype.status);
// // this happende because 



// var girl1 = {name: "Stacy", sex: "F"};
// var girl2 = girl1;
// girl2.name = "Alisha";
// // name of girl1 changed to girl2 name
// console.log(girl1.name);            

// // this is because when we assign object - 
// // it creates a reference not a copy

// // this is what is happening is Student.prototype = Person.prototype;



// // we use Object.create

// function Employee(name) {
//       this.name = name;
// }
// function Clerk(name) {
//       Employee.call(this, arguments);
// }
// // Correct way
// Clerk.prototype = Object.create(Person.prototype);
// // we do not use Clerk.prototype = new Person as 
// // it would add unnecessary undefined properties on clerk prototype

// console.log(Student.prototype.constructor);           // Person
// // set it back
// Student.prototype.constructor = Student;

// Clerk.prototype.status = "I am a clerk";
// var c1 = new Clerk("Sean");
// console.log(c1.status);

// var e1 = new Employee("David");
// console.log(e1.status);                   // return undefined





// There are two steps to inheriting
// 1. Set the prototype property using Object.create
// 2. Reset prototype.constructor




// function Vehicle(make, model, year) {
//       this.make = make;
//       this.model = model;
//       this.year = year;

// }
// Vehicle.prototype.start = function () {
//       return "Vroom Vroom !!";
// }
// Vehicle.prototype.toString = function () {
//       return "This is " + this.make + " " + this.model + " of " + this.year;
// }

// function Car(make, model, year) {
//       Vehicle.apply(this, arguments);
//       this.numWheels = 4;
// }
// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

// Car.prototype.doDrift = function () {
//       return this.toString() + " is drifting!";
// }

// function Bike(make, model, year) {
//       Vehicle.apply(this, arguments);
//       this.numWheels = 2;
// }
// Bike.prototype = Object.create(Vehicle.prototype);
// Bike.prototype.constructor = Bike;

// Bike.prototype.doWheely = function () {
//       return this.toString() + " doing wheely!";
// }

// var car1 = new Car("Honada", "City", 2009);
// console.log(car1.start());
// console.log(car1.doDrift());

// var bike1 = new Bike("Suzuki", "R1", 2011);
// console.log(bike1.start());
// console.log(bike1.doWheely());



