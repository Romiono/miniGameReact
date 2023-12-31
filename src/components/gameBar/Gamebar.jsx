import React, {useMemo, useState} from 'react';
import classes from './Gamebar.module.css'
import Selectel from "../selectels/selectel";
import search from '../../images/search.png'
import AuthInput from "../inputs/AuthInput";
import BG from '../../images/BG_gamebar.png'
import Previewgame from "./game/Previewgame";
// import * as url from "url";
// import preview1 from '../../images/'

const Gamebar = () => {
    const [searchQuery, setSearchQuery] = useState('')
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

    //----------------------------------------------------------------------------
    const searching = (e) => {
        e.stopPropagation()
        setHandleClick(true)
    }

    const unSearching = () => {
        setHandleClick(false)
    }

    //----------------------------------------------------------------------------

    const postSortedGames = useMemo(() => {
        if(sortedGames) {
            return [...games].sort((a, b) => a[sortedGames].localeCompare(b[sortedGames]))
        }
        return games
    }, [sortedGames, games])

    const sortAndSearchGames = useMemo(() => {
        return postSortedGames.filter(game => game.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, postSortedGames])

    const sortGames = (sort) => {
        setSortedGames(sort)
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
                    {handleClick
                        ?
                        <AuthInput
                            onclick={(e) => e.stopPropagation()}
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                        : <img src={search} onClick={searching}/>}
                </div>
            </div>
            <div className={classes.curent}>
                {
                    sortAndSearchGames.map(game =>
                        <Previewgame preview={game} key={game.name}/>
                    )
                }
            </div>
        </div>
    );
};

export default Gamebar;