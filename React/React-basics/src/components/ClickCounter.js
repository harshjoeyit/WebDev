import React, { Component } from 'react'
//  import higher order component
import withCounter from './withCounter'

class ClickCounter extends Component {
    
    render() {
       // props have the count and the handler 
        const {count, incrementCount} = this.props
        return (
            <button 
                onClick={incrementCount}> 
                Click {count}
             </button>
        )
    }
}

export default withCounter(ClickCounter, 5)
 