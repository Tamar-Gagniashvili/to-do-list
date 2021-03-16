import { useState } from 'react';
import { checkValidity } from '../../shared/InputTools'

import classes from './Auth.module.css';




function Signin() {
    const [messages, setMessages] = useState([]);
    const [inputData, setInputData] = useState({
        email: '',
        password: ''
    })



    const changeHandler = (event) => {
        const { name, value } = event.target;

        setInputData({ ...inputData, [name]: value });

    }


    const sumbitHandler = (event) => {
        event.preventDefault();
        // const msgs = validation(inputData.email, inputData.password);
        const msgs = validation(inputData.email, inputData.password);
        if (msgs.length > 0) {
            setMessages(msgs);
        } else {
            if (messages.length > 0) {
                setMessages([]);
            }
        }
        console.log(msgs)
    }

    let errMessage = null;

    if (messages.length > 0) {
        errMessage = messages.map((err, index) => {
            return (
                <li key={index}>{err}</li>
            )
        })
    }


    return (
        <div className={classes.authWrapper}>
            <div className={classes.auth}>
                <input type='email' placeholder='ელ.ფოსტა' value={inputData.email} name="email" onChange={changeHandler} />
                <input type='password' placeholder='პაროლი' value={inputData.password} name="password" onChange={changeHandler} />
                <button className={classes.button} onClick={sumbitHandler}>შესვლა</button>
                <ul>
                    {errMessage}
                </ul>
            </div>
        </div>

    )
}

function validation(email, password) {
    const msgs = [];
    if (!checkValidity(email, { required: true, isEmail: true })) {
        msgs.push('Invalid Email');
    }

    if (!checkValidity(password, { required: true, minLength: 5, maxLength: 15 })) {
        msgs.push('Invalid Password')
    }

    return msgs;
}



export default Signin;


