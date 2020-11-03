import React, { Component } from 'react'

class Welcome extends Component {
      render() {
            const {name, betterKnown} = this.props
            return <h1>Welcome {name} a.k.a {betterKnown} </h1>
      }
}

export default Welcome;