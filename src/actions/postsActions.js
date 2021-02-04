//Creating Redux action types 

import postsReducer from "../reducers/postsReducer";

export const GET_POSTS = 'GET_POSTS'
//getPosts is telling Redux that we are fetching posts from an API
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
//getPostsSuccess is passing the posts to Redux on a successful API call 200
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'
//getPostsFailure is informing redux that an error or 404 was encountered during Redux on a failed API call

// create action creators, which are functions that return an action
// which consists of the type and an optional payload loading data
// these below are action creators

export const getPosts = () => ({
    type: GET_POSTS,
});

export const getPostsSuccess = () => ({
    type: GET_POSTS_SUCCESS,
    payload: postsReducer,
});

export const getPostsFailure = () => ({
    type: GET_POSTS_FAILURE,
});

// Finally, make the asynchronous thunk action that combines all three of the above actions.
// When called, it will dispatch the initial getPosts()
// action to inform Redux to prepare for an API call, then in a try/catch, do everything necessary to get the data,
// and dispatch a success or failure action as necessary.

export function fetchPosts(posts) {
    return async (dispatch) => {
        dispatch(getPosts())

        //dispatch is a method available in the store object that accepts 
        //an object which is used to uipdate the redux state.
        //usually this is the result of invoking an action creator

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            dispatch(getPostsSuccess(data))
        } catch (error) {
            dispatch(getPostsFailure())
        }
    }
}