
import React from 'react'

function ChildComponent(props) {
      return (
            <div>
                  {/* <button onClick={props.greetHandler}>Greet Parent</button>  */}

                  {/* to pass parameters to handler */}

                  <button onClick={() => props.greetHandler('child')}>Greet Parent</button> 
            </div>
      )
}

export default ChildComponent
