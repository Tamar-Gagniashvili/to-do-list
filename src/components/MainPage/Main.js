import { useState } from 'react';

import classes from './Main.module.css'

function Main() {

    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);


    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const addTask = () => {
        if (task !== "") {
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: task,
                isCompleted: false
            }

            setTaskList([...taskList, taskDetails]);
        }
    }

    const deleteTask = (event, id) => {
        event.preventDefault();
        setTaskList(taskList.filter((t) => t.id !== id))
    }




    let List = null;
    if (taskList !== []) {
        List = (taskList.map((t, index) => (
            <div key={index} className={classes.list}>
                <p>{t.value}</p>
                <button className={classes.listButton} >შესრულებულია</button>
                <button className={classes.deleteButton} onClick={event => deleteTask(event, t.id)}>წაშლა</button>
            </div>
        )))


    }


    return (
        <div className={classes.main}>
            <div className={classes.contentWrapper}>
                <div className={classes.headingWrapper}>
                    <h1>ის რაც უნდა შეასრულო!</h1>
                </div>
                <div className={classes.listWrapper}>
                    <div className={classes.addWrapper}>
                        <input type="text" name="text" onChange={(e) => handleChange(e)} placeholder="დაამატე..." />
                        <button className={classes.button} onClick={addTask}>დამატება</button>
                    </div>
                    {List}
                </div>
            </div>
        </div>
    )
}

export default Main;