import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'

export const Caratula = () => {
    
    const { armaJuego } = useContext(GameContext)
    
    return (
        <div className="conteiner caratula row col-12 justify-content-center">
            <h1 className="logo-memo" onClick={armaJuego}>
                MemoTest
            </h1>
        </div>
    )
}