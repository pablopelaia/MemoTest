import React, { useContext } from 'react'
import { GameContext } from '../../../context/GameContext'
import './Styles.css'
import { Loading } from '../loading'

export const Start = () => {
    
    const { armaJuego } = useContext(GameContext)
    
    const handleClick = () => {

        let cargar
        setTimeout(() => {
            armaJuego()
            return <Loading renderizar={"Start"}/>
        }, 500);        
    }

    return (
        <div>
            <button onClick={handleClick}  className="Start">
                Start
            </button> 
            <h1 className="memo-inicio">MemoTest</h1>
        </div>
    )
}