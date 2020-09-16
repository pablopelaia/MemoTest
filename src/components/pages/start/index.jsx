import React, { useContext } from 'react'
import { GameContext } from '../../../context/GameContext'
import './Styles.css'

export const Start = () => {
    
    const { iniciaJuego } = useContext(GameContext)
    
    const handleClickUno = () => iniciaJuego(1)
    const handleClickDos = () => iniciaJuego(2)

    return (
        <div className="caratula">
            <h1 className="logo">
                MemoTest
            </h1>
            <div className="iconos">
                <div className="cantidad" value={1} onClick={handleClickUno}>
                    <button className="play one fa fa-user fa-4x" />
                    <button className="btn start">
                        1 Jugador
                    </button>
                </div>
                <div className="cantidad" value={2} onClick={handleClickDos}>
                    <button className="play two">
                        <i className="a fa fa-user fa-4x" />
                        <i className="b fa fa-user fa-4x" />
                    </button>
                    <button className="btn start">
                        2 Jugadores
                    </button>
                </div>
            </div>
        </div>
    )
}