import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"

export const fetchUserRequest=()=>{
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (user)=>{
    return { 
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}

export const fetchUserFailure = (error)=>{
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

// using redux-thunk this function will return another function
// return function need not be pure function and it also recives dispatch function as an argument
export const fetchUser = () => {
    return (dispatch)=>{
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{ 
            const users= response.data;
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            const errorMessage = error.message
            dispatch(fetchUserFailure(errorMessage))
        })
    }
}