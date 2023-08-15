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
    const [sortedGames, setSortedGames] = useState('')
    const [handleClick, setHandleClick] = useState(false)
    const [games, setGames] = useState([
        {img: 'b', name: 'sdfg', onClick: ''},
        {img: 'a', name: 'bunker', onClick: ''},
        {img: 'c', name: 'cat', onClick: ''},
        {img: 'd', name: 'tfghj', onClick: ''},
        {img: 'e', name: 'tasdak', onClick: ''},
        {img: 'a', name: 'sfgak', onClick: ''},
    ])
    const searching = (e) => {
        e.stopPropagation()
        setHandleClick(true)
    }
    const unSearching = () => {
        setHandleClick(false)
    }

    const sortGames = (sort) => {
        setSortedGames(sort)
        setGames([...games].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className={classes.gameBar} onClick={unSearching}>
            <div className={classes.header}>
                <div className={classes.headerIN}>
                    <Selectel
                        options={[
                            {title: 'По названию', value: 'name'},
                            {title: 'По изображению', value: 'img'},
                        ]}
                        defaultValue={'sort'}
                        value={sortedGames}
                        onChange={sortGames}
                    />
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