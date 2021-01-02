import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/postActions';


function Postform() {
    
    const dispatch = useDispatch()
    
    const initState = {
        title: '',
        body: ''
    }
    const [state, setState] = useState(initState)

    const handleChange = (e) => {
        setState(ps => ({
            ...ps,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createPost(state, dispatch)
    }

    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label><br />
                    <input 
                        type="text" 
                        name="title"
                        value={state.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Body: </label><br />
                    <textarea 
                        name="body"
                        value={state.body}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Postform
