import React from 'react'
import './style.css'

export function Button({ text, iconClass }) {
    return (
        <div className='button-container'>
            <button> 
                <i class={`fa ${iconClass}`} aria-hidden="true"></i>
                { text } 
            </button>
        </div>
    )
}