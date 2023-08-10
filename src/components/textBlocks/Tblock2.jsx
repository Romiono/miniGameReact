import React from 'react';
import classes from "./Tblock.module.css";
import paper from "../../images/vector.png";

const Tblock2 = ({title, value, img}) => {

    return (
        <div className={classes.all} style={{width: '100%', bottom: "350px"}}>
            <img className={[classes.paperInv, classes.Paper].join(' ')} src={paper} alt={'paper.png'} style={{top: '10px'}}/>
            <div className={classes.tBlock}>
                <img src={img} className={classes.hexagone} alt={'D.png'}/>
                <div>
                    <p className={classes.title}>{title}</p>
                    <p className={classes.mainText}>{value}</p>
                </div>
            </div>
            <img className={classes.Paper} src={paper} alt={'paper.png'}/>
        </div>
    );
};

export default Tblock2;