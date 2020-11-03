
import React, {useState, useEffect} from 'react'

function HookDocTitle() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    
    // 1st argument to useEffect is 
    // A callback which is called after render
    
    // 2nd argument is for conditionally executing useEffect 
    // the array contains those state, which when changed executes useEffect
    
    useEffect(() => {
        console.log('updating doc title')
        document.title = `You clicked ${count} times` 
    }, [count])

    return (
        <div>
            <input
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button 
                onClick={() => setCount(count + 1)}> 
                Count {count} times
            </button>
        </div>
    )
}

export default HookDocTitle
