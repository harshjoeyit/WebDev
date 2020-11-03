import React from 'react'

// function Greet() { 
//       return <h1>Hello Harshit!</h1>
// }

// const Greet = () => <h1>Whatup Harshit!</h1>

// const Hello = () => {
//       return React.createElement(
//             'div',
//             {
//                   id: 'hello',
//                   className: 'helloclass',
//                   style: {
//                         color: 'blueviolet',
//                   },
//             },
//             React.createElement('h1', null, 'Hello Harshit!')
//       );
// }

// const GreetWithName = (props) => {
//       console.log(props);
//       return (<div>
//             <h1>
//                   Hello {
//                         props.name
//                   }
//             </h1>
//             {
//                   props.children
//             }
//       </div>
//       );
// }
    
// Destructuring in the parameter itself 
// const GreetWithName = ({name, betterKnown}) => {
//       return (<div>
//                   <h1> Hello {name} a.k.a {betterKnown} </h1>
//             </div>
//       );
// }

// Normal Destructuring
const GreetWithName = (props) => {
      const { name, betterKnown, won} = props;
      return (<div>
            <h1> Hello {name} a.k.a {betterKnown} { won }</h1>
            </div>
      );
}



export default GreetWithName;