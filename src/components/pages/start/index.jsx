import React, { useContext } from 'react'
import { GameContext } from '../../../context/GameContext'
import './Styles.css'


export const Start = () => {
    
    let { armaJuego } = useContext(GameContext)

    return (
        <div>
            <button onClick={armaJuego}  className="Start">
                Start
            </button> 
            <h1 className="inicio">MemoTest</h1>
        </div>
    )
}