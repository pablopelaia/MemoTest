import React, { useContext } from 'react'
import { GameContext } from '../../../context/GameContext'
import './Styles.css'

export const Finish = () => {
    
    let { juegoFinalizado, Ganador } = useContext(GameContext)
    
    const handleClick = () => juegoFinalizado()

    return (
        <div className="main-f">
            <h1 className="subtitle-f win">
                ¡¡¡ Feliciataciones Ganaste !!!
            </h1>
            <button className={`drupal ${Ganador()} fa fa-drupal fa-5x`} />
            <h1 className="end">
                MemoTest
            </h1>
            <button onClick={handleClick}  className="click-f new">
                Nuevo juego
            </button>            
        </div>
    )
}