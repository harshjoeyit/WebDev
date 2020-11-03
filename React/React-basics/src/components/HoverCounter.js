import React, { Component } from 'react'
//  import higher order component
import withCounter from './withCounter'

class HoverCounter extends Component {
    
    render() {
        // props have the count and the handler 
        const {count, incrementCount} = this.props
        return (
            <h2 
                onMouseOver={incrementCount}> 
                Hover {count} 
            </h2>
        )
    }
}

// export the withCounter with OrginalComponent as arg
export default withCounter(HoverCounter, 10)
 