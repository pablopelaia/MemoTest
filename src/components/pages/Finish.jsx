import React, { useContext, Fragment } from 'react'
import { GameContext } from '../../context/GameContext'
import './Styles.css'

export const Finish = () => {
    
    let { fichero, juegoFinalizado } = useContext(GameContext)
    
    const handleClick = () => juegoFinalizado()

    return (
        <div className="main">
            <h1 className="subtitle win">
                ¡¡¡ Feliciataciones Ganaste en <samp className="attempts">33</samp> intentos !!!
            </h1>
            <h1 className="title end">
                MemoTest
            </h1>
            <button onClick={handleClick}  className="click new">
                Nuevo juego
            </button>            
        </div>
    )
}

// {fichero.intentos - 1}