
import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userId: '',
             title: '',
             body: ''
        }
    }
    
    changeHandler = (event) => {
        console.log(event.target.name + " " + event.target.value);
        this.setState({
            // IMP: trick to not write sepearte handlers for each input
            // use brackets [] to get the name of one of our state 
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        
        var url = 'https://jsonplaceholder.typicode.com/posts/';
        
        // axios.post(url, this.state)
        // .then(response => console.log(response))
        // .catch(error => console.log(error))

        fetch(url, {
            method:'POST',
            body: JSON.stringify(this.state)
        })
        .then(response => console.log(response))
        .catch(response => console.log(response))
    }

    render() {
        const {userId, title, body} = this.state;

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>UserId</label>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>title</label>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>body</label>
                        <input type="text" name="body" value={body} onChange={this.changeHandler}/>
                    </div>
                    <button type='submit'>Sumit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
