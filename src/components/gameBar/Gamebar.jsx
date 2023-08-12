import React, {useState} from 'react';
import classes from './Gamebar.module.css'
import Selectel from "../selectels/selectel";
import search from '../../images/search.png'
import AuthInput from "../inputs/AuthInput";
import BG from '../../images/BG_gamebar.png'

const Gamebar = () => {
    const [handleClick, setHandleClick] = useState(false)
    const searching = (e) => {
        e.stopPropagation()
        setHandleClick(true)
    }
    const unSearching = () => {
        setHandleClick(false)
    }

    return (
        <div className={classes.gameBar} onClick={unSearching}>
            <div className={classes.header}>
                <div className={classes.headerIN}>
                    <Selectel first={'sort'} second={'sort'} treeth={'asdfasdf'}/>
                    {handleClick ? <AuthInput onclick={(e) => e.stopPropagation()}/> : <img src={search} onClick={searching}/>}
                </div>
            </div>
            <div className={classes.curent}>

            </div>

        </div>
    );
};

export default Gamebar;