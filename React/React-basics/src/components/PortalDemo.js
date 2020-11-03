import React from 'react'
import ReactDOM from 'react-dom'
 
function PortalDemo() {
    const elemet = (
    <div>
        <h1>Portals Demo</h1>
    </div>
    );  

    return ReactDOM.createPortal(
        // jsx {Componenet, html..}
        elemet,
        // select where portal should be opened 
        document.getElementById('portal-root')
    )
}

// Take care of the event bubbling in portals 
// Even if the portal is not in the DOM tree, 
// event bubbling happens in React-DOM tree

export default PortalDemo
