import React from 'react';
import logo from "../../images/logo.png";
import paper from "../../images/vector7.png";
import classes from "./nav.module.css";
const Nav = () => {
    return (
        <div>
            <header className={classes.headerStyle}>
                <img className={classes.backgroundImg} src={paper} alt="paper"/>
                <img className={classes.logoImage} src= {logo} alt="logo.png"/>
                <nav className={classes.navStyle}>
                    <a href="#" className={classes.linkStyle}>Главная</a>
                    <a href="/games" className={classes.linkStyle}>Игры</a>
                    <a href="/signIn" className={classes.linkStyle}>Войти</a>
                </nav>
            </header>
        </div>
    );
};

export default Nav;