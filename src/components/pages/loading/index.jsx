import React, { useContext } from 'react'
import { GameContext } from '../../../context/GameContext'

export const Loading = () => {
    
    let { cargarPagina } = useContext(GameContext)
    
    const handleClick = () => {
        setTimeout(() => {
            cargarPagina()
        }, 1500);
    }

    return (
        <div className="conteiner caratula row col-12 justify-content-center" onClick={handleClick()}>
            <h1 className="logo-memo cargar">
                MemoTest
            </h1>
            <h1 className="loading">
                L O A D I N G <strong> .   .   .</strong>
            </h1>
        </div>
    )
}