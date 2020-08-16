import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import './Finish.css'

export const Finish = () => {
    
    let { fichero, juegoFinalizado } = useContext(GameContext)
    
    const handleClick = () => juegoFinalizado()

    return (
        <div className="main-f">
            <h1 className="subtitle-f win">
                ¡¡¡ Feliciataciones Ganaste en <samp className="attempts">{fichero.intentos - 1}</samp> intentos !!!
            </h1>
            <h1 className="end">
                MemoTest
            </h1>
            <button onClick={handleClick}  className="click-f new">
                Nuevo juego
            </button>            
        </div>
    )
}

// 