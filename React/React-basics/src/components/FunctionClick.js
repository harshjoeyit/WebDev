
import React from 'react'

function FunctionClick() {
      function handler() {
            console.log("clicked")
      }
      return (
            // points to remember in even handling
            // 1. camel case in events
            // 2. no () in handler, we dont want a function, not a function call
            
            <div>
                  <button onClick={handler}>Click</button>
            </div>
      )
}

export default FunctionClick
