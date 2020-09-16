import React, { useContext } from 'react'
import { GameContext } from '../../../context/GameContext'

export const Reset = () => {
    
    let { cargarPagina, armaJuego } = useContext(GameContext)
    
    const handleClick = () => {        
        setTimeout(() => {
            armaJuego()
            cargarPagina()
        }, 2000);
    }

    return (
        <div className="caratula" onClick={handleClick()}>
            <h1 className="logo cargar">
                MemoTest
            </h1>
            <h1 className="bajada refresh">
                Restarting <strong> .   .   .</strong>
            </h1>
        </div>
    )
}