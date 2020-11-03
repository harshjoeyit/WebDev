
import React, { Component } from 'react'

class Clock extends Component {
      constructor(props) {
            super(props)
            this.state = {
                   date: new Date()
            }
      }
      
      // Called immediately after a component is mounted. 
      // Setting state here will trigger re-rendering.
      componentDidMount() {
            this.timerID = setInterval(() => this.tick(), 1000)
      }

      componentWillUnmount() {
            clearInterval(this.timerID)
      }

      tick() {
            this.setState({
                  date: new Date()
            })
      }

      render() {
            return (
                  <div>
                        <h2>The Clock is ticking</h2>
                        <h1>{this.state.date.toLocaleTimeString()}</h1>
                  </div>
            )
      }
}

export default Clock
