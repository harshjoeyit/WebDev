
import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
      
      // constructor 
      constructor(props) {
            super(props)
      
            this.state = {
                   name: 'Harshit'
            }
            console.log('A constructor')
      }
      
      static getDerivedStateFromProps(props,state) {
            console.log('A get derived methid')
            return null
      }

      componentDidMount() {
            console.log('A Component did mount')
      }
      
      shouldComponentUpdate() {
            console.log('A should component update')
            return true;
      }

      getSnapshotBeforeUpdate() {
            console.log('A snapshot')
            return null
      }

      componentDidUpdate() {
            console.log('A did update')
      }

      handleChangeState = () => {
            this.setState({
                  name: 'Gangwar'
            })
      }

      render() {
            console.log('A render method')
            return (
                  <div>
                        <p>LifecycleA</p>
                        <button onClick={this.handleChangeState}>change state</button>
                        <LifeCycleB />
                  </div>
            )
      }
}

export default LifeCycleA
