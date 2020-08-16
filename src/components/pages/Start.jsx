import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import './Start.css'

export const Start = () => {
    
    const { armaJuego } = useContext(GameContext)
    
    const handleClick = () => armaJuego()

    return (
        <div className="main-start">
                <div className="cantidad" id="uno"  onClick={handleClick}>
                    <button className="play one fa fa-drupal fa-5x" />
                    <button className="play btn start">
                        1 Jugador
                    </button>
                </div>
                <div className="cantidad" id="dos">
                    <button className="play two">
                        <i className="a fa fa-drupal fa-4x" />
                        <i className="b fa fa-drupal fa-4x" />
                    </button>
                    <button className="play btn start" onClick={handleClick}>
                        2 Jugadores
                    </button>
                </div>
            <h1 className="memo-test">MemoTest</h1>
        </div>
    )
}