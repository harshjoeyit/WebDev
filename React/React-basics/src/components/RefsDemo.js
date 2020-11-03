import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        
        // 1.
        this.callbackRef = null
        // 2.
        this.setCallbackRef = (element) => {
            this.callbackRef = element
        }
    }

    componentDidMount() {
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        
        // 4.
        if(this.callbackRef) {
            // current not needed
            this.callbackRef.focus()
        }
    }
    
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                {/* focusing on the input as soon as the poage loads */}
                <input type='text' ref={this.inputRef} />
                {/* getting the input data on button click */}
                <button onClick={this.clickHandler}>Click</button>

                {/* 3. */}
                <input type='text' ref={this.setCallbackRef} />
            </div>
        )
    }
}

export default RefsDemo
