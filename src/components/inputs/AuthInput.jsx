import React from 'react';
import classes from "./AuthInput.module.css";
const AuthInput = ({type, preview, onclick}) => {
    return (
        <div>
            <input onClick={onclick} className={classes.inp} type={type} placeholder={preview}/>
        </div>
    );
};

export default AuthInput;