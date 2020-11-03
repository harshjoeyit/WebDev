import React, {useState} from 'react'

function HookCounter2() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i=0; i<5; i++) {
            setCount(pcount => pcount + 1)
        }
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(initialCount)}>Reset</button>     
            <button onClick={() => setCount(pcount => pcount + 1)}>Increment</button>    
            <button onClick={() => setCount(pcount => pcount - 1)}>Decrement</button>   
            <button onClick={incrementFive}>Inc 5</button>       
        </div>
    )
}

export default HookCounter2
