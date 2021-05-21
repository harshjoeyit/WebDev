import React, { useState, useEffect, useRef } from 'react'

function useRefExample1() {
    const [name, setName] = useState('');
    const prevName = useRef('')

    useEffect(() => {   
        prevName.current = name
        console.log("🚀 line 8 ~ useEffect ~ name ", name)
        console.log("🚀 line 10 ~ useEffect ~ prevName ", prevName)
    }, [name])

    const handleChange = (e) => {
        console.log("🚀 line 14 ~ handleChange ~ prevName ", prevName)
        console.log("🚀 line 15 ~ handleChange ~ name", name)
        setName(e.target.value);
    }

    return (
        <>
            <input value={name} onChange={handleChange} />
            <div>My name is {name} and it used to be {prevName.current}</div>
        </>
    )
}

export default useRefExample1
