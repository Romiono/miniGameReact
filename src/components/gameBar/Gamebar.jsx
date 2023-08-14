import React, {useState} from 'react';
import classes from './Gamebar.module.css'
import Selectel from "../selectels/selectel";
import search from '../../images/search.png'
import AuthInput from "../inputs/AuthInput";
import BG from '../../images/BG_gamebar.png'
import Previewgame from "./game/Previewgame";
// import * as url from "url";
// import preview1 from '../../images/'

const Gamebar = () => {

    const [handleClick, setHandleClick] = useState(false)
    const [games, setGames] = useState([
        {img: '', name: 'tik tik tak', onClick: ''},
        {img: '', name: 'bunker', onClick: ''},
        {img: '', name: 'cat', onClick: ''},
        {img: '', name: 'tik tik tak', onClick: ''},
        {img: '', name: 'tik tik tak', onClick: ''},
        {img: '', name: 'tik tik tak', onClick: ''},
    ])
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
                {
                    games.map(game =>
                        <Previewgame preview={game} key={game.name}/>
                    )
                }
            </div>
        </div>
    );
};

export default Gamebar;