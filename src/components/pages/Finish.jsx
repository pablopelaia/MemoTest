import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import './Finish.css'

export const Finish = () => {
    
    let { juego, juegoFinalizado } = useContext(GameContext)
    
    const handleClick = () => juegoFinalizado()
    const ganador = () => {
        if(juego.ganador === "V"){
            return "gana-verde"
        }
        return "gana-naranja"
    }

    return (
        <div className="main-f">
            <h1 className="subtitle-f win">
                ¡¡¡ Feliciataciones Ganaste !!!
            </h1>
            <button className={`drupal ${ganador()} fa fa-drupal fa-5x`} />
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