import React from 'react'
// to access a piece of state 
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'

function App() {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(increment(3))} >+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <h1>Counter {counter}</h1>
        </div>
    )
}

export default App
