import React from 'react';
import classes from './Basement.module.css'
import Dice from '../../images/dice.png'
import Telegram from '../../images/Telegram.png'
import VK from '../../images/VK.png'
import Discord from '../../images/Discord.png'
const Basement = ({text}) => {
    return (
        <div className={classes.Basement}>
            <div className={classes.Dice}>
            <img  src={Dice} alt="Dice.png"/>
            </div>
            <div className={classes.bottomPart}>
            <div className={classes.text}>
                <p>Какая-то политика конфиденциальности и всякое такое</p>
                <p>О проекте</p>
                <p>Поддержите нас</p>
            </div>
            <div className={classes.Contacts}>
                <img className={classes.img} src={Telegram} alt="Telegram.png"/>
                <img className={classes.img} src={VK} alt="VK.png"/>
                <img className={classes.img} src={Discord} alt="Discord.png"/>
            </div>
            </div>
        </div>
    );
};

export default Basement;