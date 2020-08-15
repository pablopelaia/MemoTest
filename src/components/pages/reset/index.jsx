import React, { Fragment, useContext } from 'react'
import './Styles.css'
import { GameContext } from '../../../context/GameContext'

export const Reset = () => {
    
    let { armaJuego } = useContext(GameContext)
    
    const handleClick = () => {        
        setTimeout(() => {
            armaJuego()
        }, 1200);        
    }

    return (
        <Fragment>
            <h1 className="reset">
                Reiniciando Juego <span className="wait"> .   .   .</span>
            </h1>
            <h1 className="memo-res">MemoTest</h1>
            <a className="reiniciando fa fa-drupal fa-5x" onClick={handleClick()}/>                
        </Fragment>
    )
}