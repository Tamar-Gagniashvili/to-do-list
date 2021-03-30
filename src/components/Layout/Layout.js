import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import classes from './Layout.module.css';
import * as actions from '../../store/index';
import {useTranslation} from 'react-i18next';
import Language from '../UI/Language/Language';


const Layout = (props) => {

    const [showUser, setShowUser] = useState(false);
    const history = useHistory();
    const { t } =useTranslation();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token || props.isAuthenticated) setShowUser(true);
    }, [props.isAuthenticated])

    const logOutHandler = () => {
        props.onLogout();
        setShowUser(false);
        history.push('/signin');
    }

    return (
        <div className={classes.layout}>
            <header>
                <div className={classes.logo}>
                    <img src="https://cdn-images-1.listennotes.com/podcasts/in-my-element-hYjN3nHpkKZ-uUdqTgnaf1l.1400x1400.jpg" alt="In/Your/Element" />
                    <p>In Your Element</p>
                </div>
                {showUser ?
                <nav className={classes.navItems}>
                    <NavLink to='/' className={classes.navLink} onClick={logOutHandler}>{t("logout")}</NavLink>
                </nav>
                :<nav className={classes.navItems}>
                    <NavLink to='/signup' className={classes.navLink}>{t("signup")}</NavLink>
                    <NavLink to='/' className={classes.navLink}>{t("signin")}</NavLink>
                </nav> } 
                <Language />              
            </header>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: !!state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onLogout: () => dispatch(actions.authLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);