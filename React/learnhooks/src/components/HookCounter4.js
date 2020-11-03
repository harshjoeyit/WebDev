
import React, {useState} from 'react'

function HookCounter4() {

    // the state is array (of objects)
    const [items, setItems] = useState([])

    const addItems = () => {
        console.log('adding items')
        setItems([ ...items, 
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
    }

    return (
        <div>
            <h2>List</h2>
            <button onClick={addItems}> Add a number </button>
            <ul>
                {
                    items.map(item => <li key={item.id}> {item.value} </li>)
                }
            </ul>
        </div>
    )
}

export default HookCounter4
