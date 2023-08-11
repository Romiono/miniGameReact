import React from 'react';
import Line from '../../images/line.png'
import Arrows from '../../images/arrow.png'
import classes from './Passage.module.css'
const Passage = ({text}) => {
    return (
        <div className={classes.Passage}>
            <img className={classes.Arrows} src={Arrows} alt="arrows.png"/>
            <div>
                <p className={classes.text}>{text}</p>
                <img className={classes.Line} src={Line} alt="line.png"/>
            </div>
            <img className={classes.Arrows2} src={Arrows} alt="arrows.png"/>
        </div>
    );
};

export default Passage;