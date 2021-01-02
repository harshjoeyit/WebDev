import React, { useEffect } from 'react'

function Test() {

    useEffect(() => {

        const url = 'http://localhost:9000/api/user/login/';
        const body = JSON.stringify({
            email: "samsmith@gmail.com",
            password: "123456"
        })
        const options = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: body,
        }

        const login = async () => {
            fetch(url, options)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
        }
        login()

    }, [])

    return (
        <div>

        </div>
    )
}

export default Test
