import React, { useContext } from 'react'
import './Styles.css'
import { GameContext } from '../../../context/GameContext'

export const Reset = () => {
    
    let { cargarPagina } = useContext(GameContext)
    
    const handleClick = () => {        
        setTimeout(() => {
            cargarPagina()
        }, 2000); 
    }

    return (
        <div className="main-l-r">
            <div className="main-sub">
                <a className="resetting fa fa-trash fa-5x" onClick={handleClick()}/> 
                <h1 className="subtitle-l-r refresh">
                    Reiniciando Juego <span className="wait"> .   .   .</span>
                </h1>
            </div>
            <h1 className="title-l-r reset">MemoTest</h1>
        </div>
    )
}