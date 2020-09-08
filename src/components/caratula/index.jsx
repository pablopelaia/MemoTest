import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import './Styles.css'

export const Caratula = () => {
    
    const { armaJuego } = useContext(GameContext)
    
    return (
        <div className="main-caratula">
            <h1 className="memo-caratula" onClick={armaJuego}>MemoTest</h1>            
        </div>
    )
}