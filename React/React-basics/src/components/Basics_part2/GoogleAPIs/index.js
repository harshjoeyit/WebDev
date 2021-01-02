
import React from 'react'
import useGeoLocation from './useGeoLocation'

function GeoLocation() {
    
    const location = useGeoLocation();
    
    return (
        <div>
        {
            location.loaded ? JSON.stringify(location) : "Location data not avlbl"
        }
        </div>
    )
}

export default GeoLocation
