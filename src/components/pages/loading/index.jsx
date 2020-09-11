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
        <div className="caratula" onClick={handleClick()}>
            <h1 className="logo cargar">
                MemoTest
            </h1>
            <h1 className="bajada">
                L O A D I N G <strong> .   .   .</strong>
            </h1>
        </div>
    )
}