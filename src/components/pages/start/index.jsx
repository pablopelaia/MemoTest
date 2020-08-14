import React, { useContext } from 'react'
import { GameContext } from '../../../context/GameContext'
import './Styles.css'

export const Start = () => {
    
    const { armaJuego } = useContext(GameContext)
    
    const handleClick = () => armaJuego()

    return (
        <div>
            <button onClick={handleClick}  className="Start">
                Start
            </button> 
            <h1 className="memo-inicio">MemoTest</h1>
        </div>
    )
}