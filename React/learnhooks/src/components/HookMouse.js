
import React, {useState, useEffect} from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    
    }

    // mimicking componentDidMount()

    useEffect(() => {
        console.log('use effect called')
        window.addEventListener('mousemove', logMousePosition)

        // we can return the cleanup function 
        // mimicking componentWillUnmount
        return () => {
            console.log('Component unmounted')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    
    // an empty array [] tells, that there is no state which requires 
    // useEffect to execute after every render 
    // so use effect is called only once 

    // Note: [] empty array as second arg is different from 
    // no second arg (in this case useEffect executes on every count)

    return (
        <div>
            At {x}, {y}
        </div>
    )
}

export default HookMouse
