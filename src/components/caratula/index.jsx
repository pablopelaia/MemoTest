import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'

export const Caratula = () => {
    
    const { armaJuego } = useContext(GameContext)
    
    return (
        <div className="caratula">
            <h1 className="logo">
                MemoTest
            </h1>
            <h1 className="bajada jugar" onClick={armaJuego}>
                J U G A R
            </h1>
        </div>
    )
}