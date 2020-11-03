import React, { Component } from 'react'
import Input from './Input'

// when a parent element is clicked, 
// how its child component (input) can be focused 

class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }

    clickHandler = () => {
        // focusInput is defined in <Input> component
        this.componentRef.current.focusInput()
    }
    
    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
