import React from 'react';
import  {NavLink} from 'react-router-dom'
import classes from './Layout.module.css';

const layout = (props) => {
    return (
        <div className={classes.layout}>
            <header>
                <nav className={classes.navItems}>
                    <NavLink to='/signup' className={classes.navLink}>რეგისტრაცია</NavLink>
                    <NavLink to='/' className={classes.navLink}>შესვლა</NavLink>
                </nav>
            </header>
            <div className={classes.content}>
                {props.children}
            </div>           
        </div>

    )
}

export default layout;