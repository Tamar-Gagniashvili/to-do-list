import classes from './Auth.module.css';


function Signin() {
    return (
        <div className={classes.auth}>
            <input type='text' placeholder='სახელი, გვარი' />
            <input type='text' placeholder='პაროლი' />
            <button className={classes.button}>შესვლა</button>
        </div>
    )
}

export default Signin;


