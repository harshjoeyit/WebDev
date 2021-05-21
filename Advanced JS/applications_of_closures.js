// Applications of Closures

// 1. Throttling 
// 2. Debouncing

// 3. Function that runs only ONCE
// const fa = () => {
//     let flag = false;
//     return () => {
//         if(flag) {
//             console.log('he he, will not run');
//             return;
//         }
//         console.log("fb run!!");
//         flag = true;
//     }
// }

// const fc = fa();
// fc();           // inner function runs 
// fc();           // inner function does not run


// 4. Data Hiding and encapsulation 
// const person = () => {
//     let name = "Joey";
//     let age = 10;
//     return {
//         getName: () => name,
//         getAge: () => age,
//         setAge: (newAge) => {
//             age = newAge;
//         },
//         setName: (newName) => {
//             name = newName;
//         }
//     }
// }

// /*
// getName, getAge, setName, setAge form a closure with 
// lexical scope of person
// also there is no way to directly access name and age 
// */

// const usePerson = person();
// console.log(usePerson.getName());
// console.log(usePerson.getAge());
// usePerson.setAge(24);
// usePerson.setName("Chan");
// console.log(usePerson.getName());
// console.log(usePerson.getAge());

// let usePersonAgain = person();
// console.log(usePersonAgain.getName());
// console.log(usePersonAgain.getAge());


