import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import './Styles.css'

export const Start = () => {
    
    const { armaJuego } = useContext(GameContext)
    
    const handleClick = () => armaJuego()

    return (
        <div>
            <button onClick={handleClick}  className="click start">
                Start
            </button> 
            <h1 className="title memo-test">MemoTest</h1>
        </div>
    )
}