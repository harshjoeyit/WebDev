
import React from 'react'
import { Button } from '../Utils';
import './style.css';

function SideBox( { image, buttonText } ) {
    return (
        <div className='sidebox-container'>
            <div className='image-container'>
                <img src={ image } alt="learn-image"/>
            </div>
            <Button text={ buttonText }/>
        </div>
    )
}

export default SideBox;