export const ADD_POST = "ADD_POST";
  
export function addPost(text) {
    return {
        type: ADD_POST,
        text: text
    };
};

import axios from "axios";
  
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

function requestPosts() {
    return {
        type: REQUEST_POSTS
    };
}
  
function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts: posts
    };
}

export function fetchPosts() {
    return function(dispatch) {
        dispatch(requestPosts());
        axios.get("http://localhost:3000/")
        .then(res => {
            dispatch(receivePosts(res.data));
        })
        .catch(err => {
            dispatch(errorFetchPosts(err));
        });
    };
};

export const ERROR_FETCH_POSTS = "ERROR_FETCH_POSTS";

function errorFetchPosts(err) {
    return {
        type: ERROR_FETCH_POSTS,
        error: err
    }
}

export const CHANGE_FORM_VALUE = "CHANGE_FORM_VALUE";

export function changeFormValue(name, value) {
    return {
        type: CHANGE_FORM_VALUE,
        name: name,
        value: value
    };
};