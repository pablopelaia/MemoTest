import React, { useContext } from 'react'
import { GameContext } from '../../../context/GameContext'
import './Styles.css'

export const Start = () => {
    
    const { iniciaJuego } = useContext(GameContext)
    
    const handleClickUno = () => iniciaJuego(1)
    const handleClickDos = () => iniciaJuego(2)

    return (
        <div className="conteiner">
            <div className="conteiner caratula row col-12 justify-content-center">
                <h1 className="logo-memo">
                    MemoTest
                </h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-3 cantidad" value={1} onClick={handleClickUno}>
                    <button className="play one fa fa-drupal fa-5x" />
                    <button className="btn start">
                        1 Jugador
                    </button>
                </div>
                <div className="col-3 cantidad" value={2} onClick={handleClickDos}>
                    <button className="play two">
                        <i className="a fa fa-drupal fa-4x" />
                        <i className="b fa fa-drupal fa-4x" />
                    </button>
                    <button className="btn start">
                        2 Jugadores
                    </button>
                </div>
            </div>
        </div>
    )
}