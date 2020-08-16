import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import './Styles.css'

export const Start = () => {
    
    const { armaJuego } = useContext(GameContext)
    
    const handleClick = () => armaJuego()

    return (
        <div className="main">
            <button className="click start" onClick={handleClick}>
                Start
            </button> 
            <div className="contenedor">
                <button className="play one fa fa-drupal fa-5x" />
                <button className="play two">
                    <i className="a fa fa-drupal fa-4x" />
                    <i className="b fa fa-drupal fa-4x" />
                </button>
            </div>
            <h1 className="title memo-test">MemoTest</h1>
        </div>
    )
}