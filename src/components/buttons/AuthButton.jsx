import React from 'react';
import classes from "./AuthButton.module.css"

const AuthButton = ({value, onClick}) => {
    return (
        <button onClick={onClick} className={classes.button}>
            {value}
        </button>
    );
};

export default AuthButton;