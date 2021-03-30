import * as actionTypes from '../actionTypes';
import { convertFirebaseListToArray } from '../../shared/firebaseTools';

const initialState = {
    error: null,
    loading: false,
    list: null,
    userId: null
}


const postItemStart = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    }
}

const postItemSuccess = (state, action) => {
    let oldList = [];
    if (state.list !== null) {
        oldList = [...state.list];
    }

    oldList.push(action.payload);
    return {
        ...state,
        loading: false,
        error: null,
        list: oldList
    }
}

const postItemFail = (state, action) => {
    return {
        ...state,
        error: action.error,
        loading: false
    }
}



/////////////////////// GET ITEM//////////////////////
/////////////////////// GET ITEM//////////////////////
/////////////////////// GET ITEM//////////////////////
/////////////////////// GET ITEM//////////////////////

const getItemStart = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    }
}

const getItemSuccess = (state, action) => {
    const converted = convertFirebaseListToArray(action.payload);
    return {
        ...state,
        loading: false,
        error: false,
        list: converted,
        userId: action.userId
    }
}

const getItemFail = (state, action) => {
    return {
        ...state,
        error: action.error,
        loading: false
    }
}



//////////////////////////////////Delete Items ///////////////////////
//////////////////////////////////Delete Items ///////////////////////
//////////////////////////////////Delete Items ///////////////////////
//////////////////////////////////Delete Items ///////////////////////


const deleteItemStart = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    }
}

const deleteItemSuccess = (state, action) => {

    let oldList = [...state.list];
    oldList = oldList.filter((item) => item.id !== action.todoId)
    return {
        ...state,
        loading: false,
        error: null,
        list: oldList
    }
}
const deleteItemFail = (state, action) => {
    return {
        ...state,
        error: action.error
    }
}



////////////////////////////////////////check item ////////////////////////////////
////////////////////////////////////////check item ////////////////////////////////
////////////////////////////////////////check item ////////////////////////////////
////////////////////////////////////////check item ////////////////////////////////


const checkItemStart = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    }
}
const checkItemSuccess = (state, action) => {
    let oldList = [...state.list];
    oldList.filter(item => item.id === action.todo.id)[0].finished= action.todo.finished;
    return {
        ...state,
        loading: false,
        error: null,
        list: oldList
    }
}
const checkItemFail = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POST_ITEM_START:
            return postItemStart(state, action);
        case actionTypes.POST_ITEM_SUCCESS:
            return postItemSuccess(state, action);
        case actionTypes.SIGN_IN_FAIL:
            return postItemFail(state, action);
        case actionTypes.GET_ITEM_START:
            return getItemStart(state, action);
        case actionTypes.GET_ITEM_SUCCESS:
            return getItemSuccess(state, action);
        case actionTypes.GET_ITEM_FAIL:
            return getItemFail(state, action);
        case actionTypes.DELETE_ITEM_START:
            return deleteItemStart(state, action);
        case actionTypes.DELETE_ITEM_SUCCESS:
            return deleteItemSuccess(state, action);
        case actionTypes.DELETE_ITEM_FAIL:
            return deleteItemFail(state, action);
        case actionTypes.CHECK_ITEM_START:
            return checkItemStart(state, action);
        case actionTypes.CHECK_ITEM_SUCCESS:
            return checkItemSuccess(state, action);
        case actionTypes.CHECK_ITEM_FAIL:
            return checkItemFail(state, action);
        default:
            return state;
    }
}


export default reducer;

