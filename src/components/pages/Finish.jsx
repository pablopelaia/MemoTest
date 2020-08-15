import React, { useContext, Fragment } from 'react'
import { GameContext } from '../../context/GameContext'
import './Styles.css'

export const Finish = () => {
    
    let { fichero, juegoFinalizado } = useContext(GameContext)
    
    const handleClick = () => juegoFinalizado()

    return (
        <Fragment>
            <h1 className="win">
                ¡¡¡ Feliciataciones Ganaste en <samp className="attempts">{fichero.intentos - 1}</samp> intentos !!!
            </h1>
            <h1 className="title end">
                MemoTest
            </h1>
            <button onClick={handleClick}  className="click new">
                Nuevo juego
            </button>            
        </Fragment>
    )
}