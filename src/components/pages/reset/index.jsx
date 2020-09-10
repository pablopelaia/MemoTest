import React, { useContext } from 'react'
import { GameContext } from '../../../context/GameContext'

export const Reset = () => {
    
    let { cargarPagina } = useContext(GameContext)
    
    const handleClick = () => {        
        setTimeout(() => {
            cargarPagina()
        }, 2000); 
    }

    return (
        <div className="conteiner caratula row col-12 justify-content-center" onClick={handleClick()}>
            <h1 className="logo-memo cargar">
                MemoTest
            </h1>
            <h1 className="loading refresh">
                Reiniciando Juego <strong> .   .   .</strong>
            </h1>
        </div>
    )
}