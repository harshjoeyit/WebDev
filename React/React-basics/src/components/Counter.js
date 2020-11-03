import React, { Component } from 'react'

class Counter extends Component {
      constructor(props) {
            super(props)
            this.state = {
                  count: 0
            }
      }

      // this does not changes the state 
      // use setState method inside this function 

      // increment() {
      //       this.state.count = this.state.count + 1;
      //       console.log(this.state.count);
      // }
      
      increment() {

            // these calls are async
            // state change is reflected in callbacks 

            // param1 = object, param2 = callbackfunction
            
            // this.setState({
            //       count: this.state.count + 1
            // }, () => {
            //       console.log(this.state.count)
            //       }
            // } 
            
            // when continuous state changes are required 
            // the next state depends on previous state 
            // so pass a function with param of prev state 

            // param1 = function (prevState, props), param2 = callbackfunction
            
            this.setState((prevState, props) => ({
                  count: prevState.count + 1
            }), () => {
                  console.log(this.state.count)
            })
      }

      incrementFive() {
            this.increment();
            this.increment();
            this.increment();
            this.increment();
            this.increment();
      }

      render() {
            return (
                  <div>
                        <div>Counter - {this.state.count} </div>
                        <button onClick={() => this.incrementFive()}>Increment</button>
                  </div>
            )
      }
}

export default Counter
