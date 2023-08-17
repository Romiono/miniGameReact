import React from 'react';
import classes from "./AuthInput.module.css";
const AuthInput = (props) => {
    return (
        <div>
            <input onClick={props.onclick} className={classes.inp} type={props.type} placeholder={props.preview} {...props}/>
        </div>
    );
};

export default AuthInput;