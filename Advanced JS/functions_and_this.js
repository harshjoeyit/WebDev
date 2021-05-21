/*
    BLOG LINK
    https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/

    NOTE:
    ‘this’, always references the owner of the function it is in.
    When it is inside of an object’s method — the function’s owner is the object. Thus the ‘this’ keyword is bound to the object.
    Yet when it is inside of a function, either stand alone or within another function, it will always refer to the window/global object.
*/

// var bunny = {
//     name: 'Teddy Bear',
//     showName: function () {
//         console.log("this referes to => ", this);         // this refers to 'bunny'
//         function showNameAgain() {
//             console.log("this referes to => ", this);      // this referes to the 'global/window' object
//         }
//         showNameAgain()
//     }
// };
// bunny.showName(); 

// var standAloneFunc = function () {
//     console.log(this);
// }
// standAloneFunc();


// SOLVING THE PROBLEM  

// 1. Declaring a variable _this
// var bunny = {
//     name: 'Teddy Bear',
//     showName: function () {         
//         _this = this;
//         function showNameAgain() {
//             console.log("we made a variable which refers to => ", _this);      // using _this, instead this
//         }
//         showNameAgain()
//     }
// };
// bunny.showName(); 

// 2. Using call, apply, bind
// var bunny = {
//     name: 'Teddy Bear',
//     showName: function () {         
//         function showNameAgain() {
//             console.log("we made a variable which refers to => ", this);
//         }
//         showNameAgain.call(this);   // passing the reference to this
//     }
// };
// bunny.showName(); 

// 3. Arrow functions
// var bunny = {
//     name: 'Teddy Bear',
//     showName: function () {
//         const showNameAgain = () => {
//             console.log("using arrow functions => ", this);
//         }
//         showNameAgain();
//     }
// };
// bunny.showName(); 


/*
    Arrow Functions Limitations and Differences
        1. Does not have its own bindings to this or super, and should not be used as methods.
        2. Does not have arguments, or new.target keywords.
        3. Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
        4. Can not be used as constructors.
        5. Can not use yield, within its body.

    Lexical Environment - Local memory + Lexical Environment of Parent
    https://www.youtube.com/watch?v=uH-tVP8MUs8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&t=450
    In arrow functions, this retains the value of this in its enclosing lexical environment.
*/

// var obj = {
//     property: 'Batman',
//     a: function () {
//         const b = () => {
//             const c = () => {
//                 console.log(this)            
//                  // Arrow functions do not have their own 'this', this == value of this in Lexcial Context of 
//                  // the arrow function which is function a, where this == obj
//             }
//             c();
//         }
//         b();
//     }
// };
// obj.a(); 

// var obj = {
//     count: 10,
//     doSomethingLater: function () {
//         setTimeout(function () { 
//             // Read the Note on Line 5
//             this.count++;
//             console.log(this.count);
//         }, 300);
//     }
// }
// obj.doSomethingLater();                                              // console prints "NaN", because the property "count" is not in the window scope.

// var obj = {
//     count : 10,
//     doSomethingLater : function() {                                     // of course, arrow functions are not suited for methods
//         console.log("this inside domSomethingLater this = ", this)      // this === obj, because arrow function is defined in Lexical Scope of doSomethingLater function, where this === obj
//         setTimeout( () => {                                             // since the arrow function was created within the "obj", it assumes the object's "this"
//             this.count++;
//             console.log(this.count);
//         }, 1000);
//     }
// }
// obj.doSomethingLater();


let car = {
    model: '3',
    brand:'Tesla'
}

function outer() {
    console.log('outer this => ', this);
    
    const inner = () => {
        console.log('inner this =>', this)
    }
    inner();

    let obj = {
        name: 'Pretty',
        display: function () {
            console.log('obj this', this)
            const hello = () => {
                console.log('hello this', this)
            }
            hello();
        }
    }
    obj.display();
}
outer();
outer.call(car);