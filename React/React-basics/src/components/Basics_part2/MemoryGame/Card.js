import React, { Profiler } from 'react'
import Proptypes from 'prop-types';
import './style.css'

const Card = (props) => {
    let style = {};
    if(props.showing) {
        style.backgroundColor = props.backgroundColor;
    }
    return (
        <div 
            onClick={props.onClick} 
            className='card' 
            style={style} 
        />
    )
}

Card.propTypes = {
    showing: Proptypes.bool.isRequired,
    backgroundColor:Proptypes.string.isRequired,
    onClick:Proptypes.func.isRequired

};

export default Card
