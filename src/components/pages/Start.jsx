import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import './Start.css'

export const Start = () => {
    
    const { iniciaJuego } = useContext(GameContext)
    
    const handleClickUno = () => iniciaJuego(1)
    const handleClickDos = () => iniciaJuego(2)

    return (
        <div className="main-start">
                <div className="cantidad" id="uno" value={1} onClick={handleClickUno}>
                    <button className="play one fa fa-drupal fa-5x" />
                    <button className="play btn start">
                        1 Jugador
                    </button>
                </div>
                <div className="cantidad" id="dos" value={2} onClick={handleClickDos}>
                    <button className="play two">
                        <i className="a fa fa-drupal fa-4x" />
                        <i className="b fa fa-drupal fa-4x" />
                    </button>
                    <button className="play btn start">
                        2 Jugadores
                    </button>
                </div>
            <h1 className="memo-test">MemoTest</h1>
        </div>
    )
}