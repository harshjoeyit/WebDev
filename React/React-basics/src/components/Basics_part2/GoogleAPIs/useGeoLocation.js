import React, { useState, useEffect } from 'react'

function useGeoLocation() {
    const [location, setLocation] = useState({ 
        loaded: false,
        coordinates: { lat: "", lng: "" }
    })

    const onSuccess = location => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    }

    const onError = error => {
        setLocation({
            loaded: true,
            error: {
                code: 1,
                message: "Did not allow geolocation"
            },
        });
    }

    useEffect(()  => {
        if( !("geolocation" in navigator) ) {
            setLocation({
                loaded: true,
                error: {
                    code: 0,
                    message: "Geolocation not supported"
                }
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError)
        
    }, [])

    return location;
}

export default useGeoLocation
