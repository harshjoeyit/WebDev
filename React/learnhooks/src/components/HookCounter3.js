
import React, {useState} from 'react'

function HookCounter3() {

    // the state is object 
    const [name, setName] = useState({firstName: '', lastName: ''})
    
    return (
        <form>
            <input 
                type="text" 
                value={name.firstName}          // similar to merging two objects using spread 
                onChange = {event => setName({ ...name, firstName: event.target.value})}
            />
            <input 
                type="text" 
                value={name.lastName}           // similar to merging two objects using spread
                onChange = {event => setName({ ...name, lastName: event.target.value})}
            />
            <h2>{name.firstName} {name.lastName}</h2>
        </form>
    )
}

export default HookCounter3
