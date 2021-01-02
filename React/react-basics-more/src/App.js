import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import Posts from './components/Posts'
import PostForm from './components/Postform'


function App() {
    return (
        <Provider store={store}>
            <div>
                <PostForm />
                <hr />
                <Posts />
            </div>
        </Provider>
    )
}

export default App
