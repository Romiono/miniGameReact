import React from 'react';
import classes from './Previewgame.module.css'
const Previewgame = ({preview}) => {
    return (
        <div onClick={preview.onClick} className={classes.main}>
            <img src={preview.img} className={classes.img}/>
            <p className={classes.text}>{preview.name}</p>
        </div>
    );
};

export default Previewgame;