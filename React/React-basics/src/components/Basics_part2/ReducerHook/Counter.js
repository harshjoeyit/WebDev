
import React, { useReducer } from 'react'

const initState = { count: 0 , name: 'Some name' }

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment': 
            return { count: state.count + 1 };
        case 'decrement': 
            return { count: state.count - 1 };
        default:
            throw new Error('Invalid action type\n')
    }
}

const Counter = () => {
    
    const [state, dispatch] = useReducer(reducer, initState);
    
    return (
        <>
            Count: { state.count }
            <button onClick={ () => dispatch({ type: 'decrement' }) }> Sub - </button>
            <button onClick={ () => dispatch({ type: 'increment' }) }> Add + </button>
            <input
                name = 'name'
                onChange={ () => {} } 
                value = { state.name }   
            />
        </>
    )
}

export default Counter
