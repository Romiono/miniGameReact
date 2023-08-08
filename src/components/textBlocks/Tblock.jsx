import React from 'react';
import classes from "./Tblock.module.css";

const Tblock = ({title, value, img}) => {

    return (
        <div className={classes.tBlock}>
            <div>
                <p className={classes.title}>{title}</p>
                <p className={classes.mainText}>{value}</p>
            </div>
            <img src={img} className={classes.hexagone} alt={'D.png'}/>
        </div>
    );
};

export default Tblock;