
import React, { Component } from 'react'

class EventBind extends Component {
      
      constructor(props) {
            super(props)
            this.state = {
                  message: 'Hello'
            }

            // Method 3
            // this.handler = this.handler.bind(this)
      }
      
      // handler() {
      //       // this is undefined 
      //       this.setState({
      //             message: 'Goodbye'
      //       })
      //       console.log(this);
      // }

      // Method 4
      // handler = () => {
      //       this.setState({
      //             message: "Goodbye"
      //       })
      // }

      render() {
            return (
                  <div>
                        <div>{this.state.message}</div>
                        {/* <button onClick={this.handler}>Click</button> */}

                        {/* Method 1 */}
                        {/* <button onClick={this.handler.bind(this)}>Click</button> */}

                        {/* Method 2 */}
                        {/* <button onClick={() => this.handler()}>Click</button> */}
                  
                        {/* Efficient approach 3 */}
                        {/* <button onClick={this.handler}>Click</button> */}

                        <button onClick={this.handler}>Click</button>
                  </div>
            )
      }
}

export default EventBind
