
import { FETCH_POSTS, NEW_POST } from '../actions/types'

const initState = {
    items: [],
    item: {}
}

const postReducer = (state = initState, action) => {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST: 
            return {
                ...state,
                items: [action.payload, ...state.items],
                item: action.payload
            }
        default:
            return state;
    }
} 

export default postReducer