
import React, {useState} from 'react'
import HookMouse from './components/HookMouse'

function MouseContainer() {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button 
                onClick = {() => setDisplay(!display)}>
                Toggle Display
            </button>
            
            {/* 
                if display = false, HookMouse is unmounted 
                but the event listener is not removed, wheich 
                gives a warning, 

                so we mimic the behaviour of componentWillUnmount()

                after a component is unomounted, all the listeners 
                attached must be removed 
            */}

            {display && <HookMouse />}
        </div>
    )
}

export default MouseContainer
