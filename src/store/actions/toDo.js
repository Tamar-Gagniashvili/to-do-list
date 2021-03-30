import * as actionTypes from '../actionTypes';
import axios from 'axios';


export const postItemStart = () => {
    return {
        type: actionTypes.POST_ITEM_START
    }
}

export const postItemSuccess = (payload) => {
    return {
        type: actionTypes.POST_ITEM_SUCCESS,
        payload: payload
    }
}

export const postItemFail = () => {
    return {
        type: actionTypes.POST_ITEM_FAIL
    }
}



export const postItem = (data) => {
    return dispatch => {
        dispatch(postItemStart());

        axios.post(`https://to-do-list-83b64-default-rtdb.firebaseio.com/${data.userId}/todos.json`, data)
            .then(response => {
                data.id = response.data.name;
                dispatch(postItemSuccess(data));
            })
            .catch(err => {
                console.log(err);
                dispatch(postItemFail(err))
            })
    }
}


//////////////////////////////GET ITEM////////////////////////////
//////////////////////////////GET ITEM////////////////////////////
//////////////////////////////GET ITEM////////////////////////////
//////////////////////////////GET ITEM////////////////////////////


export const getItemStart = () => {
    return {
        type: actionTypes.GET_ITEM_START
    }
}

export const getItemSuccess = (payload, userId) => {
    return {
        type: actionTypes.GET_ITEM_SUCCESS,
        payload: payload,
        userId: userId
    }
}

export const getItemFail = () => {
    return {
        type: actionTypes.GET_ITEM_FAIL
    }
}

export const getItem = (userId) => {
    return dispatch => {
        dispatch(getItemStart());

        axios.get(`https://to-do-list-83b64-default-rtdb.firebaseio.com/${userId}/todos.json`)
            .then(response => {
                if (response.data === null) {
                    dispatch(getItemFail('Data is Empty'))
                } else {
                    dispatch(getItemSuccess(response.data, userId));
                }
            })
            .catch(err => {
                console.log(err);
                dispatch(getItemFail(err))
            })

    }
}


///////////////////////////////Delete Item //////////////////////////
///////////////////////////////Delete Item //////////////////////////
///////////////////////////////Delete Item //////////////////////////
///////////////////////////////Delete Item //////////////////////////

export const deleteItemStart = () => {
    return {
        type: actionTypes.DELETE_ITEM_START
    }
}
export const deleteItemSuccess = (todoId) => {
    return {
        type: actionTypes.DELETE_ITEM_SUCCESS,
        todoId: todoId
    }
}
export const deleteItemFail = () => {
    return {
        type: actionTypes.DELETE_ITEM_FAIL
    }
}


export const deleteItem = (userId, todoId) => {
    return dispatch => {
        dispatch(deleteItemStart());

        axios.delete(`https://to-do-list-83b64-default-rtdb.firebaseio.com/${userId}/todos/${todoId}.json`)
            .then(() => {
                dispatch(deleteItemSuccess(todoId));
            })
            .catch(err => {
                console.log(err);
                dispatch(deleteItemFail(err))
            })

    }
}



////////////////////////////////////// CHECK ITEM /////////////////////////
////////////////////////////////////// CHECK ITEM /////////////////////////
////////////////////////////////////// CHECK ITEM /////////////////////////
////////////////////////////////////// CHECK ITEM /////////////////////////


export const checkItemStart = () =>{
    return {
        type: actionTypes.CHECK_ITEM_START
    }
}
export const checkItemSuccess = (todo) =>{
    return {
        type: actionTypes.CHECK_ITEM_SUCCESS,
        todo: todo
    }
}
export const checkItemFail = () =>{
    return {
        type: actionTypes.CHECK_ITEM_FAIL
    }
}


export const checkTodo = (userId, todo) => {
    return dispatch =>{
        dispatch(checkItemStart());

        const data={
            finished: todo.finished,
            date: todo.date,
            value: todo.value,
            userId: todo.userId
        }

        axios.put(`https://to-do-list-83b64-default-rtdb.firebaseio.com/${userId}/todos/${todo.id}.json`, data)
            .then(() => {
                dispatch(checkItemSuccess(todo));
            })
            .catch(err => {
                dispatch(checkItemFail(err))
            })
    }
}

