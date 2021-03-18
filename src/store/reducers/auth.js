import * as actionTypes from '../actionTypes';

const initialState={
    token: null,
    error: null,
    loading: false,
    userId: null
}



//////////////////////////sign in///////////////////////
//////////////////////////sign in///////////////////////
//////////////////////////sign in///////////////////////
//////////////////////////sign in///////////////////////


const signinStart = (state, action) => {
    return{
        ...state,
        loading: true
    }
}
const signinSuccess = (state, action) => {
    return{
        ...state,
        loading: false,
        error:null,
        token: action.token,
        userId: action.userId
    }
}
const signinFail = (state, action) => {
    return{
        ...state,
        loading: false,
        error:action.error
    }
}



////////////////////////////////////sign up /////////////////////////////
////////////////////////////////////sign up /////////////////////////////
////////////////////////////////////sign up /////////////////////////////
////////////////////////////////////sign up /////////////////////////////

const signupStart = (state,action) =>{
    return{
        ...state,
        loading: true
    }
}

const signupSuccess = (state, action) =>{
    return{
        ...state,
        loading: false, 
        error: null,
        token: action.token,
        userId: action.userId
    }
}

const signupFail = (state, action) =>{
    return{
        ...state, 
        loading: false, 
        error: action.error
    }
}



const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SIGN_IN_START :
            return signinStart(state,action);
        case actionTypes.SIGN_IN_SUCCESS:
            return signinSuccess(state, action);
        case actionTypes.SIGN_IN_FAIL:
            return signinFail(state, action);
        case actionTypes.SIGN_UP_START:
            return signupStart(state, action);
        case actionTypes.SIGN_UP_SUCCESS:
            return signupSuccess(state, action);
        case actionTypes.SIGN_UP_FAIL:
            return signupFail(state, action);
        default:
            return state;
    }
}

export default reducer;