
import React, { Component } from 'react'

// Conditional rendering 

class UserGreeting extends Component {
      constructor(props) {
            super(props)

            this.state = {
                   isLoggedIn: true
            }
      }
      
      render() {
            
            // Method 1

            // let message
            // if(this.state.isLoggedIn) {
            //       message = <div>Welcome MJ!</div>
            // } else {
            //       message = <div>Welcome Guest!</div>
            // }

            // return <div>{message}</div>


            // Method 2

            // if(this.state.isLoggedIn) {
            //       return <div>Welcome MJ!</div>
            // } else {
            //       return <div>Welcome Guest</div>
            // }

            // JSX cannot have if else statements 

            // return (
            //       <div>
                       
            //            <div>Welcome MJ!</div>
            //            <div>Welcome Guest!</div> 
            //       </div>
            // )


            // Method 3
            // can be used with JSX

            // return (
            //       this.state.isLoggedIn ?
            //       <div>Welcome MJ!</div> :
            //       <div>Welcome Guest!</div> 
            // )


            // Method 4
            // Shortcut operator 

            return this.state.isLoggedIn && <div>Welcome MJ!</div>
      }
}

export default UserGreeting
