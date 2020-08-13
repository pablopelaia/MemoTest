import React, { useContext } from 'react'
import { GameContext } from '../../../context/GameContext'
import './Styles.css'


export const Ganaste = () => {
    
    let { armaJuego } = useContext(GameContext)

    return (
        <div>
            <h1 className="ganar">
                ¡¡¡ Feliciataciones Ganaste en <samp className="intentos">30</samp> intentos !!!
            </h1>
            <h1 className="memo-fin">
                MemoTest
            </h1>
            <button onClick={armaJuego}  className="jugar">
                Nuevo juego
            </button>            
        </div>
    )
}