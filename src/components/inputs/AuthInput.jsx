import React from 'react';
import classes from "./AuthInput.module.css";
const AuthInput = ({type, preview}) => {
    return (
        <div>
            <input className={classes.inp} type={type} placeholder={preview}/>
        </div>
    );
};

export default AuthInput;