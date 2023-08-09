import React from 'react';
import classes from "./OriginButton.module.css";
const OriginButton = ({value, onClick}) => {
    return (
        <button onClick={onClick} className={classes.btn}>
            {value}
        </button>
    );
};

export default OriginButton;