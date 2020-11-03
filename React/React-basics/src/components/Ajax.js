import Axios from 'axios';
import React, { Component } from 'react'
import axios from 'axios'
import './MyStyles.css'

class Ajax extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            postList: [],
            isLoading: true
        }
    }
    
    componentDidMount() {
        this.fetchPostList()
    }
    
    fetchPostList() {
        var url = 'https://jsonplaceholder.typicode.com/photos';
        // fetch(url)
        // .then(reponse => reponse.json())
        // .then(data => {
        //     this.setState({
        //         postList: data
        //     })
        // })
        
        axios.get(url)
        .then(response => response.data)
        .then(data => {
            this.setState({
                postList: data,
                isLoading: false
            })
        })
    }
    
    render() {
        const {postList, isLoading} = this.state;
        
        if(isLoading) {
            return (
                <div class="loader"></div>
                );
            } 
            return (
                <div>
                {
                    postList.map(post => (
                        <div key={post.id}>
                        <li>{post.title}</li>
                        <img src={post.thumbnailUrl} width='100px' alt='image'/>
                        </div>
                        
                        ))
                    }
                    </div>
                    )
                }
            }
            
            export default Ajax
            