
import React, { useState, useEffect } from 'react'

const style = {
    backgroundColor: "beige",
    width: "350px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px"
}

const Profile = ({ url }) => {
    
    const initState = {
        username: "",
        avatar: "",
        githubUrl: ""
    }
    const [profile, setProfile] = useState(initState);

    // for fetching the use data 
    useEffect(() => {
        
        const getData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setProfile(prevState => ({
                ...prevState,
                username: data.login,
                avatar: data.avatar_url,
                githubUrl: data.html_url
            }));
        }
        getData();
    
    }, [url])
    // useEffect takes in a prop and runs whenever the prop changes 
    
    return (
        <div style={ style }> 
            <div>
                <img src={ profile.avatar } alt="profile_image" width="150px" />
            </div>
            <div>
                <h2>{ profile.username }</h2>
                <a target="new" href={ profile.githubUrl }>Github Profile</a>
            </div>
        </div>
    )
}

export default Profile
