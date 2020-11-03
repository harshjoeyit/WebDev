
import React, { Component } from 'react'

class ErrorBoundaries extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    
    // one of these method must be implemented to handle errors 
    
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }

    render() {
        if (this.state.hasError) {
            // fallback UI
            return <p>Something went wrong</p>
        }
        // if no Error render children as it is 
        return this.props.children
    }
}

export default ErrorBoundaries
