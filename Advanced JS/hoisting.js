
/* 
    RESOURCE LINKS
    Akshay saini Namaste javascript - Hoisting
    https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
*/

/*
    var - 
    The var statement declares a function-scoped or globally-scoped variable, 
    optionally initializing it to a value.
*/

// bla = 2;
// var bla;         // bla is hoisted, before the line 1 is executed,  var bla = undefined 
// console.log(bla);


// var x = 1;
// if (x === 1) {
//     var x = 2;
//     console.log(x);
// }
// console.log(x);


// var y = 111;
// if(true) {
//     console.log(y);
//     var y = 222;         // reassigns the global y
//     console.log(y);

//     if(true) {
//         console.log(y)
//         var y = 333;         // reassigns the global y
//         console.log(y);
//     }
//     console.log(y)           // prints the lastes changes
// }
// console.log(y);              // prints the latest changes 



// var x = 10;
// function  f1() {
//     console.log(x);          // x is hoisted in scope of f1(), x = undefined
//     var x = 20;              
//     console.log(x);

//     function f2() {
//         console.log(x);      // x is hoisted in scope of f2()
//         var x = 30;
//         console.log(x);
//     }
//     f2();
//     console.log(x);
// }
// f1();
// console.log(x);


// var car = "audi"
// function newCar() {      
//    // new scope found for variable car, 
//    // variable car is hoisted and so car = undefined
//     console.log(car);
//     var car = "bmw";         // has no relation to var car = "audi", its new variable in this function scope
//     console.log(car);
// }
// newCar();
// console.log(car);            // prints global varibale car = "audi"


// var car = "audi"
// function newCar() {
//     console.log(car);    // reads the global variable 
//     car = "bmw";         // value of global car changed 
//     console.log(car);
// }
// newCar();
// console.log(car);        // prints the changed value "bmw"


// var x = 0;
// function f() {
//                      // declaring variable without var keyword throws refrence error in strict mode  
//   var x = y = 1;     // changes value of global x, creates global y
// }
// function f2() {
//     y = 2;           // changes value of global variable y
// }
// function f3() {
//     var y = 3;       // creates a local variable y
// }
// f();
// console.log(x, y); // 0 1
// f2();
// console.log(y);
// f3();
// console.log(y);


// // console.log(carName);    // gives refrence error because carName is not defined
// myFunction();
// console.log(carName);       // code here can use carName

// function myFunction() {
//     carName = "Volvo";      // throws error in strict mode
// }


// a();        // function a is hoisted, this call is valid 
// b();        // var b is hoisted and b = undefined, error: b is not a function
// // FUNCTION STATEMENT or FUNCTION DECLARATION
// function a() {
//     console.log("a called");
// }
// // FUNCTION EXPRESSION
// var b = () => {
//     console.log("b called");
// }
// // this is the difference b/w a FUNCTION STATEMENT AND EXPRESSION



/*
    NOTE: Order of Precedence
    variable assignment > function declaration > variable declaration

    Explaination => 
    - function declaration > variable declaration
    in a program if same variable is used for a function declaration and a var declaration 
    then the variable is hoisted as a function (and not as 'undefined' var)

    - variable assignment > function declaration
    as the code is executed line by line, finally the line comes where the variable was declared and assigned a value (ex- var a = 10)
    before this line variable was a function but now a variable will be assigned a value
*/

// console.log("Something is hoisted it is, ", myVar);
// // The internal JavaScript interpreter will always give precedence to a function declaration.
// function myVar() {
//     console.log('I am a function.')
// }
// var myVar = 'I am a variable';
// console.log(myVar); // "I am a variable"

// console.log("Something is hoisted it is, ", myVar);
// // The internal JavaScript interpreter will always give precedence to a function declaration.
// var myVar = 'I am a variable';      // myVar reassigned
// function myVar(){
//   console.log('I am a function.')
// }
// console.log(myVar); // "I am a variable"


