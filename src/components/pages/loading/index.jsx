import React, { useContext } from 'react'
import './Styles.css'
import { GameContext } from '../../../context/GameContext'

export const Loading = () => {
    
    let { cargarPagina } = useContext(GameContext)
    
    const handleClick = () => {
        setTimeout(() => {
            cargarPagina()
        }, 1500);
    }

    return (
        <div className="main-l-r" onClick={handleClick()}>
            <h1 className="subtitle-l-r loading">
                L O A D I N G <span className="updating"> .   .   .</span>
            </h1>
            <h1 className="title-l-r load">MemoTest</h1>              
        </div>
    )
}