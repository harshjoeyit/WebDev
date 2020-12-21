import React from 'react'
import dots from '../images/dots.png'
import './style.css'

function CenterBoxTitleBar({ title, }) {
    return (
        <div className="centerbox-titlebar">
            <p>{ title }</p>
            <img 
                src={ dots } 
                alt="stats image" 
            />
        </div>
    )
}

function CenterBoxData({ heading, value, status, image }) {
    return (
        <div className="centerbox-data">
            <div className="stats-container">
                <p> { heading } </p>
                <p className="styled-text"> { value } </p>
                <p> {status} </p>
            </div>
            <div className="image-container">
                <img 
                    src={ image } 
                    alt="stats image" 
                />
            </div>
        </div>
    )
}

function CenterBox({ title, heading, value, status, image }) {
    return (
        <div className="centerbox-container">
            <CenterBoxTitleBar title={ title } />
            <CenterBoxData 
                heading={ heading }
                value={ value }
                status={ status }
                image={ image }
            />
        </div>
    )
}


export default CenterBox;