
import React from 'react'
import './MyStyles.css'

const heading = {
      fontSize: '48px',
      color: 'tomato', 
      textDecoration: 'underline',
      opacity: '0.5'
}

function StyleSheet() {
      return (
            <div>
                  {/* Method 1, importing the stylesheets  */}
                  <h1 className='primary font-xl'>StyleSheet</h1>

                  {/* Method 2, inline styling */}
                  <h1 style={heading}>Content</h1>
            </div>
      )
}

export default StyleSheet
