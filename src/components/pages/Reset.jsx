import React, { Fragment, useContext } from 'react'
import './Styles.css'
import { GameContext } from '../../context/GameContext'

export const Reset = () => {
    
    let { armaJuego } = useContext(GameContext)
    
    const handleClick = () => {        
        setTimeout(() => {
            armaJuego()
        }, 1200);        
    }

    return (
        <div className="main">
            <div className="main-sub">
                <h1 className="subtitle refresh">
                    Reiniciando Juego <span className="wait"> .   .   .</span>
                </h1>
                <a className="resetting fa fa-trash fa-5x" onClick={handleClick()}/> 
            </div>
            <h1 className="title reset">MemoTest</h1>
                           
        </div>
    )
}