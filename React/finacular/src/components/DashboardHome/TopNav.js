import React from 'react'
import './style.css'
import ham from '../images/ham.png'
import { Button } from '../Utils'
import Dashboard from '.'

function TopNav() {
    return (
        <>
        <header className='topnav-container'> 
            <div className="logo">
                <h2>
                    <i class="fa fa-superpowers" aria-hidden="true"></i>
                    Finacular
                </h2>
            </div>
            <div className="navlinks-options">
                <div className="navlinks-left">
                    <Button 
                        text="" 
                        iconClass="fa-cog" 
                    />
                    <Button 
                        text="" 
                        iconClass="fa-bell" 
                    />
                </div>
                <div className="navlinks-right">
                    <Button 
                        text="Actions" 
                        iconClass="fa-bolt" 
                    />
                </div>
                <div className="nav-icon" >
                    <img src={ ham } alt="hamburgur" />
                </div>
            </div>
        </header>
        </>
    )
}

export default TopNav
