import { useState } from 'react';

import classes from './Auth.module.css';
import { checkValidity } from '../../shared/InputTools'


function Signup() {
    const [messages, setMessages] = useState([]);
    const [inputData, setInputData] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    })

    const changeHandler = (event) => {
        const { name, value } = event.target;

        setInputData({ ...inputData, [name]: value });
    }



    const signupHandler = (event) => {
        event.preventDefault();
        const msgs = validateSignup(inputData.email, inputData.password, inputData.repeatPassword);
        if (msgs.length > 0) {
            setMessages(msgs);
        } else {
            if (messages.length > 0) {
                setMessages([]);
            }
        }
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
                <input type='password' placeholder='გაიმეორეთ პაროლი' value={inputData.repeatPassword} name="repeatPassword" onChange={changeHandler} />
                <button className={classes.button} onClick={signupHandler}>რეგისტრაცია</button>
                <ul>
                    {errMessage}
                </ul>
            </div>
        </div>
    )
}

function validateSignup(email, password, repeatPassword) {
    const msgs = [];
    if (!checkValidity(email, { required: true, isEmail: true })) {
        msgs.push('Invalid Email')
    }
    if (!checkValidity(password, { required: true, minLength: 5, maxLength: 15 })) {
        msgs.push('Invalid Password')
    }
    if (password !== repeatPassword) {
        msgs.push('Passwords Do Not Match')
    }
    return msgs;
}

export default Signup;
