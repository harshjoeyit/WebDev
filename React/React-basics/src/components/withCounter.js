
// const WithCounter = higherOrderComponent(WrappedComponent)
// const IronMan = withSuit(TonyStark)

import React from 'react'

// Agrument is WrappedComponent
const withCounter = (WrappedComponent, incValue) => {
    
    // create WithCounter
    // WithCounter does the counting for us
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        
        incremenCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + incValue}
            })
        }

        render() {
            // passing the props {count, and handler}
            return (
                <WrappedComponent 
                    count={this.state.count} 
                    incrementCount={this.incremenCount}
                    {...this.props}
                />
                // use the spread operator to pass props
                // , since all the props passed here 
                // merge into one singe object {props}
                // similar to
                /*  let obj1 = { foo: 'bar', x: 42 };
                    let obj2 = { foo: 'baz', y: 13 };
                    let clonedObj = { ...obj1 };
                */
            )
        }
    }
    return WithCounter
}

export default withCounter
