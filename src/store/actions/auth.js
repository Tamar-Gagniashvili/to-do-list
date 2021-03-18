import * as actionTypes from '../actionTypes';
import axios from 'axios';


export const signinStart= () => {
    return{
        type: actionTypes.SIGN_IN_START
    }
}

export const signinSuccess = (token, userId) => {
    return{
        type: actionTypes.SIGN_IN_SUCCESS,
        token: token,
        userId: userId
    }
}

export const signinFail = (err) => {
    return{
        type: actionTypes.SIGN_IN_FAIL,
        error: err
    }
}



export const signin = (email, password, onSuccess) => {
    return dispatch => {
        dispatch(signinStart());
        const data= {
            email: email,
            password: password,
            returnSecureToken: true
        }
        console.log(data)
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBAWvYS6FPTbtm3CBStHyTNg-T8hTTjExw', data)
        .then(response => {
            localStorage.setItem('token', response.data.idToken)
            localStorage.setItem('userId', response.data.localId)
            onSuccess();
            dispatch(signinSuccess(response.data.idToken,response.data.localId))
        })
        .catch(err => {
            console.log(err);
            dispatch(signinFail(err))
        })

    }
}

///////////////////////////sign up//////////////////////////////////////
///////////////////////////sign up//////////////////////////////////////
///////////////////////////sign up//////////////////////////////////////
///////////////////////////sign up//////////////////////////////////////

export const signupStart=()=>{
        return{
            type: actionTypes.SIGN_UP_START
        }
}

export const signupSuccess = (token, userId) => {
    return{
        type: actionTypes.SIGN_UP_SUCCESS,
        // token: token,
        token,
        userId: userId
    }
}

export const signupFail = (err) =>{
    return{
        type: actionTypes.SIGN_UP_FAIL,
        error: err
    }
}



export const signup = (email, password, onSuccess) => {
    return dispatch =>{
        dispatch(signupStart());
        const data= {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBAWvYS6FPTbtm3CBStHyTNg-T8hTTjExw', data)
        .then(response =>{
            localStorage.setItem('token', response.data.idToken)
            localStorage.setItem('userId', response.data.localId)
            onSuccess();
            dispatch(signupSuccess(response.data.idToken, response.data.localId))
        })
        .catch(err => {
            dispatch(signupFail(err))
        })
    }
} 

