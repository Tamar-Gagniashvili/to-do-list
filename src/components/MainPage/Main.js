import { useState, useEffect } from 'react';
import { CheckSquareFill, XSquareFill } from 'react-bootstrap-icons';
import * as actions from '../../store/actions/toDo';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useTranslation} from 'react-i18next';


import classes from './Main.module.css'

function Main(props) {
    const { t } = useTranslation();
    const [task, setTask] = useState('');

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            history.push('/')
        }
        if (props.todoUserId !== props.userId || props.todoUserId === null) {
            props.onGet(localStorage.getItem('userId'))
        }
    }, [props, history])



    const handleChange = (e) => {
        setTask(e.target.value)
    }



    const addTask = () => {
        if (task !== "") {

            const data = {
                value: task,
                finished: false,
                date: Date.now(),
                userId: localStorage.getItem('userId')
            }
            props.onPost(data);
            setTask('');
        }
    }

    const deleteTask = (todoId) => {
        props.onDelete(localStorage.getItem('userId'), todoId);
    }



    const checkTask = (todoId) => {
        const todo = props.list.filter(item => item.id === todoId)[0];
        todo.finished = !todo.finished;
        props.onCheckTodo(localStorage.getItem('userId'), todo);

    }




    let List = null;
    if (props.list !== null) {
        List = (props.list.map((t, index) => (
            <div key={index} className={classes.list}>
                <p style={t.finished ? { textDecoration: 'line-through' } : {}}>{t.value}</p>
                <button className={classes.checkIcon} onClick={() => checkTask(t.id)} style={t.finished ? { backgroundColor: 'rgba(255, 255, 255, 0.5)', cursor: 'default' } : {}}><CheckSquareFill /></button>
                <button className={classes.deleteIcon} onClick={() => deleteTask(t.id)}><XSquareFill /></button>
            </div>
        )))
    }


    return (
        <div className={classes.main}>
            <div className={classes.contentWrapper}>
                <div className={classes.headingWrapper}>
                    <h1>{t("todolist")}</h1>
                </div>
                <div className={classes.listWrapper}>
                    <div className={classes.addWrapper}>
                        <input type="text" name="text" value={task} onChange={handleChange} placeholder={t("Add")} />
                        <button className={classes.button} onClick={addTask}>{t("add")}</button>
                    </div>
                    {List}
                </div>
            </div>
        </div>
    )
}


export const mapStateToProps = (state) => {
    return {
        error: state.todo.error,
        loading: state.todo.loading,
        list: state.todo.list,
        isAuthenticated: !!state.auth.token,
        todoUserId: state.todo.userId,
        userId: state.auth.userId
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onPost: (data) => dispatch(actions.postItem(data)),
        onGet: (userId) => dispatch(actions.getItem(userId)),
        onDelete: (userId, todoId) => dispatch(actions.deleteItem(userId, todoId)),
        onCheckTodo: (userId, todo) => dispatch(actions.checkTodo(userId, todo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);