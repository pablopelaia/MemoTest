import React, { useContext } from 'react'
import './Styles.css'
import { Fichero } from './Fichero'
import { GameContext } from '../../context/GameContext'

export const Tablero = () => {
    
    const { fichero, reiniciaJuego } = useContext(GameContext)
    
    const handleClick = () => {
        
        const res=window.confirm('Desea iniciar una nueva partida')
        
        if(res) {
            reiniciaJuego()
        }

        return
    }

    return (
        <div className="principal">
            <div className="fichas">
                <Fichero />
            </div>
            <div className="elementos">
                <hr className="separador"/>
                <h1 className="contador">
                    Intentos <span>{fichero.intentos}</span>
                </h1>
                <button className="reiniciar" onClick={handleClick}>
                    Reiniciar
                </button>
                <h1 className="memo-tablero">MemoTest</h1>
            </div>            
        </div>
    )
}