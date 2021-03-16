import React from 'react';
import  {NavLink} from 'react-router-dom'
import classes from './Layout.module.css';

const layout = (props) => {
    return (
        <div className={classes.layout}>
            <header>
                <div className={classes.logo}>
                    <img src="https://cdn-images-1.listennotes.com/podcasts/in-my-element-hYjN3nHpkKZ-uUdqTgnaf1l.1400x1400.jpg" alt="In/Your/Element"/>
                    <p>In Your Element</p>
                </div>
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