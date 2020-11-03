
import React, { Component } from 'react'

// rce
class ClassClick extends Component {
      
      handler () {
            console.log("clicked")
      }
      render() {
            return (
                  // Use this with handler 
                  <div>
                        <button onClick={this.handler}>Click Me</button>
                  </div>
            )
      }
}

export default ClassClick
