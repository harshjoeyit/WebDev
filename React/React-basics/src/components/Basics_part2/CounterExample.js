import React, { useEffect, useState, Component } from 'react'

// Counter using Hooks

/*
export default function Test({ skip }) {

    const [state, seState] = useState({ val: 0 });

    useEffect(() => {
        console.log("updated: " + state.val);
    }, [state])

    const handler = (marker) => {
        seState((prevState) => ({
            val: prevState.val + marker * skip
        }))
    }

    return (
        <div>
            {state.val}
            <button
                onClick={() => { handler(1) }}
            >increment</button>
            <button
                onClick={() => { handler(-1) }}
            >decrement</button>
        </div>
    )
}
*/


// Counter using Class Components 

/*
class Test extends Component {
    
    constructor ({ skip }) {
        super()
        this.state = { val: 0 }
    }

    // callback function 
    cb = () => {
        console.log("updated: " + this.state.val);
    }

    handler = (marker) => {
        this.setState((prevState, {skip}) => {
            return {
                val: prevState.val + marker * skip
            }
        }, this.cb)
    }
    
    render() {
        return (
            <div>
                {this.state.val}
                <button
                    onClick={() => { this.handler(1) }}
                >increment</button>
                <button
                    onClick={() => { this.handler(-1) }}
                >decrement</button>
            </div>
        )
    }
}

export default Test
*/
