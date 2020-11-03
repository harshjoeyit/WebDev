
import React, { Component } from 'react'

class LifeCycleB extends Component {
      
      // constructor 
      constructor(props) {
            super(props)
      
            this.state = {
                   name: 'Harshit'
            }
            console.log('B constructor')
      }
      
      static getDerivedStateFromProps(props,state) {
            console.log('B get derived methid')
            return null
      }

      componentDidMount() {
            console.log('B Component did mount')
      }

      shouldComponentUpdate() {
            console.log('B should component update')
            return true;
      }

      getSnapshotBeforeUpdate() {
            console.log('B snapshot')
            return null
      }

      componentDidUpdate() {
            console.log('B did update')
      }
      
      render() {
            console.log('B render method')
            return (
                  <div>
                        LifecycleB
                  </div>
            )
      }
}

export default LifeCycleB
