
import React, { useState, useEffect } from 'react'
import Profile from './Profile'

const rowStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center"
}
const colStyle = {
    width: "500px",
}
const listStyle = {
    backgroundColor: 'beige',
    margin: '5px',
    padding: '5px', 
    cursor: 'pointer'
}

const UserList = () => {
    const url = "https://api.github.com/users";
    const initState = { 
        list: [], 
        clicked: "https://api.github.com/users/harshjoeyit" 
    };

    const [users, setUsers] = useState(initState)
    
    useEffect(() => {
        
        const getUsers = async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setUsers(prevState => ({
                ...prevState, 
                list: data
            }))
        } 
        getUsers();

    }, [])

    const handleClick = (url) => {
        setUsers(prevState => ({...prevState, clicked: url}))
    }

    return (
        <div style={rowStyle}>
            <h2> Github Users </h2>
            <div style={colStyle}>
            {
                users.list.map(user => (
                    <div 
                        key={ user.id } 
                        style={listStyle}
                        onClick = {() => { handleClick(user.url) }}
                    > 
                        <h3>{ user.login }</h3>
                    </div>
                ))
            }
            </div>
            <div style={colStyle}>
                <Profile url={ users.clicked } />
            </div>
        </div>
    )
}

export default UserList
