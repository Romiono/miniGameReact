import React from 'react';
import logo from "../../images/logo.png";
import paper from "../../images/vector7.png";
import classes from "./nav.module.css";

const Nav = () => {
    return (
        <div style={{position: "relative", zIndex: '2', width: '100%'}}>
            <img className={classes.backgroundImg} src={paper} alt="paper"/>
            <header className={classes.headerStyle}>
                <div>
                    <img className={classes.logoImage} src={logo} alt="logo.png"/>
                </div>
                <div>
                    <nav className={classes.navStyle}>
                        <a href= "*" className={classes.linkStyle}>Главная</a>
                        <a href="/games" className={classes.linkStyle}>Игры</a>
                        <a href="/signIn" className={classes.linkStyle}>Войти</a>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Nav;