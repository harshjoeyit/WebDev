import React, { useState, useCallback } from 'react'

const functionsCounter = new Set()

const Counter = () => {
      const [count, setCount] = useState(0)
      const [otherCounter, setOtherCounter] = useState(0)

      const increment = useCallback(() => {
            setCount(count + 1)
      }, [count])

      const decrement = useCallback(() => {
            setCount(count - 1)
      }, [count])

      const incrementOtherCounter = useCallback(() => {
            setOtherCounter(otherCounter + 1)
      }, [otherCounter])

      functionsCounter.add(increment)
      functionsCounter.add(decrement)
      functionsCounter.add(incrementOtherCounter)

      console.log(functionsCounter)

      // Whenever count changes all the three functions are reinstalled 
      // check the console after every click 
      // To optimise it we will use useCallback() hook that will only reinstall 
      // those functions that are related/responsible for changing state

      return (
      <>
            Count: {count}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
      </>
      )
}

export default Counter
