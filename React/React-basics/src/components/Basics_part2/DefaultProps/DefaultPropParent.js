
import React from 'react'
import {DefaultPropChild, DefaultPropChild2, Greet} from './DefaultPropChild'

function DefaultPropParent() {
    return (
        <div>
            <h1>Parent</h1>
            {/* Class component */}
            <DefaultPropChild  age="32" city="Bali"/>
            {/* Functional component */}
            <DefaultPropChild2  name="Hakim" />
            <Greet/>
        </div>
    )
}

export default DefaultPropParent
