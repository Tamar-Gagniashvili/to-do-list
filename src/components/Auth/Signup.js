import classes from './Auth.module.css';

function Signup() {
    return (
        <div className={classes.authWrapper}>
            <div className={classes.auth}>
                <input type='text' placeholder='სახელი, გვარი' />
                <input type='text' placeholder='პაროლი' />
                <button className={classes.button}>რეგისტრაცია</button>
            </div>
        </div>
    )
}

export default Signup;
